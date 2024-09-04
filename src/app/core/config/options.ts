import type { TodoStatus } from "@interfaces/todo";
import { traductions } from "@lang/traductions";

export const options: { name: string; value: TodoStatus }[] = [
	{ name: traductions["empty"], value: "empty" },
	{ name: traductions["in-progress"], value: "in-progress" },
	{ name: traductions["finished"], value: "finished" },
];
