import { createSelector } from "@ngrx/store";
import { TaskItem, Tasks, TasksState } from "./tasks.interfaces";
import { AppState } from "./tasks.reducer";

export const tasksStateSelector = (state: AppState) => state.tasksState;

export const tasksSelector = createSelector<AppState, TasksState, Tasks>(
    tasksStateSelector,
    (state: TasksState) => state.tasks
);

export const currentTaskSelector = createSelector<AppState, TasksState, TaskItem>(
    tasksStateSelector,
    (state: TasksState) => state?.tasks[state?.selectedTask as string]
);
