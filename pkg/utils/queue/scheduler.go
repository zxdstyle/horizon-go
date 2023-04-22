package tw

import (
	"sync"
	"time"
)

type Scheduler struct {
	tasks        []*task
	lock         sync.Mutex
	totalRuns    int
	totalSuccess int
	totalErrors  int
}

func NewScheduler() *Scheduler {
	return &Scheduler{
		tasks:        make([]*task, 0),
		totalRuns:    0,
		totalSuccess: 0,
		totalErrors:  0,
	}
}

func (s *Scheduler) AddTask(job Job, interval time.Duration) *task {
	task := newTask(job, interval, time.Now().Add(interval), false)
	s.lock.Lock()
	defer s.lock.Unlock()
	s.tasks = append(s.tasks, task)
	return task
}

func (s *Scheduler) AddDelayedTask(job Job, delay time.Duration) *task {
	task := newTask(job, time.Duration(0), time.Now().Add(delay), true)
	task.Timer = time.NewTimer(delay)
	s.lock.Lock()
	defer s.lock.Unlock()
	s.tasks = append(s.tasks, task)
	return task
}

func (s *Scheduler) RemoveTask(task *task) {
	s.lock.Lock()
	defer s.lock.Unlock()
	for i, t := range s.tasks {
		if t == task {
			t.Stop()
			s.tasks = append(s.tasks[:i], s.tasks[i+1:]...)
			break
		}
	}
}

func (s *Scheduler) Run() {
	for _, t := range s.tasks {
		go func(t *task) {
			t.Run()
			if t.LastRunTime != time.Now() {
				s.lock.Lock()
				defer s.lock.Unlock()

				s.totalRuns++
				if t.LastRunTime.Add(t.Interval).Before(time.Now()) {
					s.totalErrors++
				} else {
					s.totalSuccess++
				}
			}
		}(t)
	}
}

func (s *Scheduler) Stop() {
	s.lock.Lock()
	defer s.lock.Unlock()
	for _, task := range s.tasks {
		task.Stop()
	}
}

func (s *Scheduler) GetStats() (int, int, int) {
	s.lock.Lock()
	defer s.lock.Unlock()
	return s.totalRuns, s.totalSuccess, s.totalErrors
}
