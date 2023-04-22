package tw

import "time"

type Job interface {
	Do() error
}

type task struct {
	Job           Job
	Interval      time.Duration
	NextRunTime   time.Time
	LastRunTime   time.Time
	Running       bool
	Quit          chan struct{}
	Timer         *time.Timer
	IsDelayedTask bool
}

func newTask(job Job, interval time.Duration, nextRunTime time.Time, isDelayedTask bool) *task {
	return &task{
		Job:           job,
		Interval:      interval,
		NextRunTime:   nextRunTime,
		LastRunTime:   time.Time{},
		Running:       false,
		Quit:          make(chan struct{}),
		Timer:         nil,
		IsDelayedTask: isDelayedTask,
	}
}

func (t *task) Run() {
	t.Running = true
	if t.IsDelayedTask {
		<-t.Timer.C
	} else {
		time.Sleep(t.NextRunTime.Sub(time.Now()))
	}
	for {
		select {
		case <-t.Quit:
			t.Running = false
			return
		case <-time.After(t.Interval):
			t.Job.Do()
			t.LastRunTime = time.Now()
			t.NextRunTime = t.LastRunTime.Add(t.Interval)
			if t.Timer == nil {
				t.Timer = time.NewTimer(t.NextRunTime.Sub(t.LastRunTime))
			} else {
				t.Timer.Reset(t.NextRunTime.Sub(t.LastRunTime))
			}
		}
	}
}

func (t *task) Stop() {
	close(t.Quit)
}
