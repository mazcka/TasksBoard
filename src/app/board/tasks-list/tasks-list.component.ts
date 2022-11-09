import { Component, Input, OnInit } from '@angular/core';
import { TaskItem } from 'src/app/state/tasks.interfaces';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  @Input() listType: string = '';
  @Input() taskList: TaskItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
