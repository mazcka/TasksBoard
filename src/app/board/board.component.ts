import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TasksFacade } from '../state/tasks.facade';
import { Tasks } from '../state/tasks.interfaces';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  tasks$ = this.tasksFacade.getTasks();

  constructor(private tasksFacade: TasksFacade) { }

  ngOnInit(): void {
    this.tasks$.pipe(filter(tasks => tasks != null && tasks != undefined)).subscribe(ss => {
      console.log(ss);
    });
  }

  get taskList(): Observable<Tasks> {
    return this.tasksFacade.getTasks();
  }
}
