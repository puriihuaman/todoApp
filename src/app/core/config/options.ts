import type { TodoStatus } from "@interfaces/todo";
import { traductions } from "@lang/traductions";

export const options: { name: string; value: TodoStatus }[] = [
	{ name: traductions["pending"], value: "pending" },
	{ name: traductions["in-progress"], value: "in-progress" },
	{ name: traductions["finished"], value: "finished" },
];
