export interface Todo {
	id: string;
	description: string;
	status: TodoStatus;
	createdAt: string | Date;
}

export type TodoStatus = "pending" | "in-progress" | "finished";

export type FilterStatus = TodoStatus | "all";
