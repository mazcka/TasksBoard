import { createAction, props } from '@ngrx/store';
import { TaskItemStatus, TasksTypesNames } from './tasks.interfaces';

export const retrievedTasksList = createAction(TasksTypesNames.GET_TASKS);

export const updateTaskStatus = createAction(TasksTypesNames.UPDATE_TASK_STATUS, props<{ newStatus: TaskItemStatus }>());

export const removeTask = createAction(TasksTypesNames.REMOVE_TASK, props<{ taskId: string }>());

export const clearSelectedTask = createAction(TasksTypesNames.CLEAR_SELECTED_TASK);
