export interface Todo {
    id: number;
    task: string;
    isCompleted: boolean;
    dateCreated: string;
    dateCompleted?: string;
}