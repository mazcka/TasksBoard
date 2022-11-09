import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { currentTaskSelector, tasksSelector } from "./state.selectors";
import { TaskItem, Tasks, TasksTypesNames } from "./tasks.interfaces";
import { AppState } from "./tasks.reducer";

@Injectable({
    providedIn: 'root'
})
export class TasksFacade {
    constructor(private store: Store<AppState>) { }

    fetchTasks(): void {
        this.store.dispatch({ type: TasksTypesNames.GET_TASKS });
    }

    getTasks(): Observable<Tasks> {
        return this.store.pipe(select(tasksSelector));
    }

    getSelectedTask(): Observable<TaskItem> {
        return this.store.pipe(select(currentTaskSelector));
    }
}