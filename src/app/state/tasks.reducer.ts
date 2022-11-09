import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { clearSelectedTask, removeTask, setSelectedTask, setTasks, updateTaskStatus } from './tasks.actions';
import { TasksState } from './tasks.interfaces';

export const initialState: TasksState = {
    tasks: {},
    selectedTask: null
};

export const tasksReducer = createReducer(
    initialState,
    on(setTasks, (state, { fetchedTasks }) => ({ ...state, tasks: { ...fetchedTasks } })),
    on(setSelectedTask, (state, { taskId }) => ({ ...state, selectedTask: taskId })),
    on(updateTaskStatus, (state, { taskId, newStatus }) => ({ ...state, tasks: { ...state.tasks, [taskId]: { ...state.tasks[taskId], status: newStatus } } })),
    on(removeTask, (state, { taskId }) => {
        const newTasks = { ...state.tasks }
        delete newTasks[taskId];
        return { ...state, tasks: newTasks, selectedTask: null };
    }),
    on(clearSelectedTask, (state) => ({ ...state, selectedTask: null }))
);

export interface AppState {
    tasksState: TasksState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    tasksState: tasksReducer
};
