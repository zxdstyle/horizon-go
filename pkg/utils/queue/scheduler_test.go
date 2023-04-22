package tw

import (
	"fmt"
	"testing"
	"time"
)

type MyJob struct {
	Name string
}

func (j *MyJob) Do() error {
	fmt.Printf("[%v] Hello world!\n", j.Name)
	return nil
}

func TestScheduler_Run(t *testing.T) {

	s := NewScheduler()
	defer s.Stop()

	// Add a task to run every 1 second
	s.AddTask(&MyJob{Name: "Task 1"}, time.Second)

	// Add a task to run after 5 seconds
	//s.AddDelayedTask(&MyJob{Name: "Task 2"}, 5*time.Second)

	// Add a task to run every 2 seconds and remove it after 10 seconds
	task3 := s.AddTask(&MyJob{Name: "Task 3"}, 2*time.Second)
	time.AfterFunc(10*time.Second, func() {
		s.RemoveTask(task3)
	})

	// Start the scheduler
	s.Run()

	// Print the scheduler statistics
	totalRuns, totalSuccess, totalErrors := s.GetStats()
	fmt.Printf("Total runs: %v\nTotal success: %v\nTotal errors: %v\n", totalRuns, totalSuccess, totalErrors)
	select {}
}
