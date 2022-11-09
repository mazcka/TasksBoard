import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { currentTaskSelector, tasksSelector } from "./state.selectors";
import { Actions, setSelectedTask, updateTaskStatus } from "./tasks.actions";
import { TaskItem, TaskItemStatus, Tasks, TasksTypesNames } from "./tasks.interfaces";
import { AppState } from "./tasks.reducer";

@Injectable({
    providedIn: 'root'
})
export class TasksFacade {
    constructor(private store: Store<AppState>) { }

    fetchTasks(): void {
        this.store.dispatch({ type: TasksTypesNames.GET_TASKS });
    }

    setSelectedTask(taskId: string): void {
        this.store.dispatch(Actions.setSelectedTask({ taskId }));
    }

    updateTaskStatus(taskId: string, newStatus: TaskItemStatus): void {
        this.store.dispatch(Actions.updateTaskStatus({ taskId, newStatus }));
    }

    removeTask(taskId: string): void {
        this.store.dispatch(Actions.removeTask({ taskId }));
    }

    getTasks(): Observable<Tasks> {
        return this.store.pipe(select(tasksSelector));
    }

    getSelectedTask(): Observable<TaskItem> {
        return this.store.pipe(select(currentTaskSelector));
    }
}