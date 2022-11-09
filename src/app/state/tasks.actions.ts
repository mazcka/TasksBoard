import { createAction, createSelector, props } from '@ngrx/store';
import { TaskItem, TaskItemStatus, Tasks, TasksState, TasksTypesNames } from './tasks.interfaces';
import { AppState } from './tasks.reducer';

export const fetchTasksList = createAction(TasksTypesNames.GET_TASKS);

export const setTasks = createAction(TasksTypesNames.SET_TASKS, props<{ fetchedTasks: Tasks }>())

export const updateTaskStatus = createAction(TasksTypesNames.UPDATE_TASK_STATUS, props<{ newStatus: TaskItemStatus }>());

export const removeTask = createAction(TasksTypesNames.REMOVE_TASK, props<{ taskId: string }>());

export const setSelectedTask = createAction(TasksTypesNames.SET_SELECTED_TASK, props<({ taskId: string })>());

export const clearSelectedTask = createAction(TasksTypesNames.CLEAR_SELECTED_TASK);

export const tasksStateSelector = (state: AppState) => state.tasksState;

export const tasksSelector = createSelector<AppState, TasksState, Tasks>(
    tasksStateSelector,
    (state: TasksState) => state.tasks
);

export const currentTaskSelector = createSelector<AppState, TasksState, TaskItem>(
    tasksStateSelector,
    (state: TasksState) => state?.tasks[state?.selectedTask as string]
);
