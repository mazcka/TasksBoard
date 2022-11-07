export interface TasksState {
    tasks: Tasks;
    selectedTask: TaskItem;
}

export type Tasks = Array<TaskItem>;

export interface TaskItem {
    id: string;
    title: string;
    description: string;
    status: TaskItemStatus;
}

export enum TaskItemStatus {
    Todo,
    InProgress,
    Done
}

export enum TasksTypesNames {
    GET_TASKS = '[Board Page] Fetch all tasks', // handled by effect
    SET_SELECTED_TASK = '[Board Page] Set current selected task',
    UPDATE_TASK_STATUS = '[Board Page] Update task status',
    REMOVE_TASK = '[Board Page] Remove task from board',
    CLEAR_SELECTED_TASK = '[Board Page] Clear current selected task'
}
