import { Component, OnInit } from '@angular/core';
import { TasksFacade } from './state/tasks.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private tasksFacade: TasksFacade) {

  }

  ngOnInit(): void {
    this.tasksFacade.fetchTasks();
  }
}
