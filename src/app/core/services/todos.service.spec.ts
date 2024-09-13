import { TestBed } from "@angular/core/testing";

import type { Todo, TodoStatus } from "@interfaces/todo";
import { TodosService } from "./todos.service";

const initialTodos: Todo[] = [
	{
		id: "001",
		description: "App Todo",
		status: "finished",
		createdAt: "2024/09/07",
	},
	{
		id: "002",
		description: "Learn Testing",
		status: "in-progress",
		createdAt: "2024/09/12",
	},
];

describe("TodosService", () => {
	let service: TodosService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TodosService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("#addTodo should create a new everything", () => {
		const newTodo: Todo = {
			id: "003",
			description: "Test Todo",
			status: "in-progress",
			createdAt: "2024/09/12",
		};
		service.addTodo(newTodo);
		service
			.allTodos()
			.subscribe((todos: Todo[]): void => expect(todos).toContain(newTodo));
	});

	it("#removeTodo should delete a whole", (): void => {
		const todoId = "001";
		service.removeTodo(todoId);
		service.allTodos().subscribe((todos: Todo[]): void => {
			const todoDeleted: Todo | undefined = todos.find(
				(todo: Todo): boolean => todo.id === todoId
			);
			expect(todoDeleted).toBeUndefined();
		});
	});

	it("#filteredTodos should filter todo by status", (): void => {
		const statusFilter: TodoStatus = "pending";
		service
			.filterByStatus(statusFilter)
			.subscribe((filteredTodos: Todo[]): void => {
				expect(
					filteredTodos.every(
						(todo: Todo): boolean => todo.status === statusFilter
					)
				).toBe(true);
			});
	});

	it("#allTodos should return all Todos", (): void => {
		service["todosSubject"].next(initialTodos);

		service.allTodos().subscribe((todos: Todo[]): void => {
			console.log(todos);
			expect(todos).toBeTruthy();
			expect(todos.length).toBe(2);
			expect(todos).toEqual(initialTodos);
		});
	});
});
