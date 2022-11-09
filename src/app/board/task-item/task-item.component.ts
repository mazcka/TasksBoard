import { Component, Input, OnInit } from '@angular/core';
import { TaskItem } from 'src/app/state/tasks.interfaces';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: TaskItem = { id: '' };

  constructor() { }

  ngOnInit(): void {
  }
}
