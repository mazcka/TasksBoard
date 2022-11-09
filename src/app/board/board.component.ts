import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { TasksFacade } from '../state/tasks.facade';
import { TaskItem, TaskItemStatus } from '../state/tasks.interfaces';
import { AppState } from '../state/tasks.reducer';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  tasks$ = this.tasksFacade.getTasks();

  todoTasks: TaskItem[] = [];
  inProgressTasks: TaskItem[] = [];
  doneTasks: TaskItem[] = [];

  constructor(private tasksFacade: TasksFacade, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.tasks$
      .pipe(filter(tasks => tasks != null && tasks != undefined && Object.values(tasks).length > 0))
      .subscribe(allTasks => {
        const tasks = Object.values(allTasks);
        this.todoTasks = tasks.filter(t => t.status === TaskItemStatus.Todo);
        this.inProgressTasks = tasks.filter(t => t.status === TaskItemStatus.InProgress);
        this.doneTasks = tasks.filter(t => t.status === TaskItemStatus.Done);
      });
  }
}
