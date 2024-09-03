export interface Todo {
	id: string;
	description: string;
	status: TodoStatus;
	createdAt: string | Date;
}

export type TodoStatus = "empty" | "in-progress" | "finished";
