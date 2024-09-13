export interface Todo {
	id: string;
	description: string;
	status: TodoStatus | FilterStatus;
	createdAt: string | Date;
}

export type TodoStatus = "pending" | "in-progress" | "finished";

export type FilterStatus = TodoStatus | "all";
