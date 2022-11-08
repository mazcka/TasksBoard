import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tasksSelector } from "./tasks.actions";
import { Tasks, TasksState, TasksTypesNames } from "./tasks.interfaces";

@Injectable({
    providedIn: 'root'
})
export class TasksFacade {
    constructor(private store: Store<TasksState>) { }

    fetchTasks(): void {
        console.log('fetchTasks');
        this.store.dispatch({ type: TasksTypesNames.GET_TASKS });
    }

    getTasks(): Observable<Tasks> {
        console.log('getTasks');
        return this.store.pipe(select(tasksSelector));
    }
}