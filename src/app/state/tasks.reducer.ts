import { state } from '@angular/animations';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { clearSelectedTask, removeTask, setTasks, updateTaskStatus } from './tasks.actions';
import { TasksState } from './tasks.interfaces';

export const TasksStateFeatureKey = 'tasksState';

export const initialState: TasksState = {
    tasks: {},
    selectedTask: null
};

export const tasksReducer = createReducer(
    initialState,
    on(setTasks, (state, { fetchedTasks }) => ({ ...state, tasks: fetchedTasks })),
    on(updateTaskStatus, (state, { newStatus }) => ({ ...state, tasks: { ...state.tasks, [state.selectedTask as string]: { ...state.tasks[state.selectedTask as string], status: newStatus } } })),
    on(removeTask, (state, { taskId }) => {
        const newTasks = { ...state.tasks }
        delete newTasks[taskId];
        return { ...state, tasks: newTasks, seletedTask: null };
    }),
    on(clearSelectedTask, (state) => ({ ...state, selectedTask: null }))
);

export interface AppState {
    tasksFeature: TasksState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    tasksFeature: tasksReducer
};
