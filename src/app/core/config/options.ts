import type { Option } from "@interfaces/option";
import type { FilterStatus, TodoStatus } from "@interfaces/todo";
import { traductions } from "@lang/traductions";

export const options: Option<TodoStatus>[] = [
	{ name: traductions["pending"], value: "pending" },
	{ name: traductions["in-progress"], value: "in-progress" },
	{ name: traductions["finished"], value: "finished" },
];

export const filterOptions: Option<FilterStatus>[] = [
	{ name: traductions["all"], value: "all" },
	...options,
];
