import type { Option } from "@interfaces/option";
import type { FilterStatus, TodoStatus } from "@interfaces/todo";
import { traductions } from "@lang/traductions";

// export const options: { name: string; value: TodoStatus }[] = [
export const options: Option<string, TodoStatus>[] = [
	{ name: traductions["pending"], value: "pending" },
	{ name: traductions["in-progress"], value: "in-progress" },
	{ name: traductions["finished"], value: "finished" },
];

// export const filterOptions: { name: string; value: FilterStatus }[] = [
export const filterOptions: Option<string, FilterStatus>[] = [
	{ name: traductions["all"], value: "all" },
	...options,
];
