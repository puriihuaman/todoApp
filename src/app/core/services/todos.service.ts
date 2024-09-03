import { Injectable } from "@angular/core";
import type { Todo } from "@interfaces/todo";
import { BehaviorSubject, type Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class TodosService {
	private todos: Todo[] = initialTodos;
	private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(
		this.todos
	);

	constructor() {
		this.loadFromStorage();
	}

	public addTodo(todo: Todo): void {
		this.todos.push(todo);
		this.update();
	}

	public removeTodo(todoId: Todo["id"]): void {
		this.todos = this.todos.filter((todo: Todo): boolean => todo.id !== todoId);
		this.update();
	}

	public allTodos(): Observable<Todo[]> {
		return this.todosSubject.asObservable();
	}

	private loadFromStorage(): void {
		const storedTodos: string | null = localStorage.getItem("TODOS");
		if (storedTodos) this.todos = JSON.parse(storedTodos);
		else this.todos = initialTodos;
	}

	private update(): void {
		this.todosSubject.next(this.todos);
		this.upgradeStorage();
	}

	private upgradeStorage(): void {
		localStorage.setItem("TODOS", JSON.stringify(this.todos));
	}
}

const initialTodos: Todo[] = [
	{
		id: crypto.randomUUID(),
		description: "Tarea 1",
		status: "in-progress",
		createdAt: new Date(),
	},
	{
		id: crypto.randomUUID(),
		description: "Tarea 2",
		status: "empty",
		createdAt: new Date(),
	},
	{
		id: crypto.randomUUID(),
		description: "Tarea 3",
		status: "finished",
		createdAt: new Date(),
	},
];
