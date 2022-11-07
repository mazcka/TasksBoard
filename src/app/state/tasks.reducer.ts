import { createReducer, on } from '@ngrx/store';
import { clearSelectedTask, removeTask, updateTaskStatus } from './tasks.actions';
import { TaskItem, TasksState } from './tasks.interfaces';

export const TasksStateFeatureKey = 'tasksState';

export const initialState: TasksState = {
    tasks: [],
    selectedTask: {} as TaskItem
};

export const tasksReducer = createReducer(
    initialState,
    on(updateTaskStatus, (state, { newStatus }) => ({ ...state, selectedTask: { ...state.selectedTask, status: newStatus } })),
    on(removeTask, (state, { taskId }) => ({ ...state, tasks: state.tasks.filter(t => t.id !== taskId), seletedTask: '' })),
    on(clearSelectedTask, (state) => ({ ...state, selectedTask: {} as TaskItem }))
);
