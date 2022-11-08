import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TaskItem, TaskItemStatus } from '../state/tasks.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private sampleTask: TaskItem = { id: '1', title: 'Item 1', description: 'Desc 1', status: TaskItemStatus.Todo };

  getTasks(): Observable<TaskItem[]> {
    return of([this.sampleTask,
    { ...this.sampleTask, id: '2', status: TaskItemStatus.InProgress },
    { ...this.sampleTask, id: '3', status: TaskItemStatus.Done }]);
  }
}
