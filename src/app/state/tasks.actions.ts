import { createAction, props } from '@ngrx/store';
import { TaskItemStatus, Tasks, TasksTypesNames } from './tasks.interfaces';

export const fetchTasksList = createAction(TasksTypesNames.GET_TASKS);

export const setTasks = createAction(TasksTypesNames.SET_TASKS, props<{ fetchedTasks: Tasks }>())

export const updateTaskStatus = createAction(TasksTypesNames.UPDATE_TASK_STATUS, props<{ taskId: string, newStatus: TaskItemStatus }>());

export const removeTask = createAction(TasksTypesNames.REMOVE_TASK, props<({ taskId: string })>());

export const setSelectedTask = createAction(TasksTypesNames.SET_SELECTED_TASK, props<({ taskId: string })>());

export const clearSelectedTask = createAction(TasksTypesNames.CLEAR_SELECTED_TASK);

export const Actions = {
    fetchTasksList,
    setTasks,
    updateTaskStatus,
    removeTask,
    setSelectedTask,
    clearSelectedTask
}