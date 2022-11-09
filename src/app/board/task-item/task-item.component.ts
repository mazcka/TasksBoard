import { Component, Input, OnInit } from '@angular/core';
import { TasksFacade } from 'src/app/state/tasks.facade';
import { TaskItem, TaskItemStatus } from 'src/app/state/tasks.interfaces';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: TaskItem = { id: '' };

  selectedTask$ = this.tasksFacade.getSelectedTask();

  constructor(private tasksFacade: TasksFacade) { }

  ngOnInit(): void {
  }

  onSelectTask(): void {
    this.tasksFacade.setSelectedTask(this.task.id);
  }

  onTaskItemClick(status: any): void {
    this.tasksFacade.updateTaskStatus(this.task.id, status);
  }

  onDeleteTask(): void {
    this.tasksFacade.removeTask(this.task.id);
  }
}
