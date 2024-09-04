/**
 * 
export interface Todo {
	id: string;
	description: string;
	status: TodoStatus | FilterStatus;
	createdAt: string | Date;
}
 */

export interface Todo<T> {
	id: string;
	description: string;
	status: T;
	createdAt: string | Date;
}

export type TodoStatus = "pending" | "in-progress" | "finished";

export type FilterStatus = TodoStatus | "all";

// enum TodoStatus {
// 	Pending = 'Pending',
// 	Completed = 'Completed',
// 	InProgress = 'InProgress'
// }
