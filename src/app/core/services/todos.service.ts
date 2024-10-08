import { Injectable } from "@angular/core";
import { environment } from "@env/environment.development";
import type { FilterStatus, Todo, TodoStatus } from "@interfaces/todo";
import { BehaviorSubject, type Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class TodosService {
	private storageName: string = environment.storageName;
	private todos: Todo[] = [];
	private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(
		this.todos
	);
	private filterSubject: BehaviorSubject<FilterStatus> =
		new BehaviorSubject<FilterStatus>("all");

	constructor() {
		this.loadFromStorage();
		this.setupFiltering();
	}

	public allTodos(): Observable<Todo[]> {
		return this.todosSubject.asObservable();
	}

	public addTodo(todo: Todo): void {
		this.todos.push(todo);
		this.update();
	}

	public removeTodo(todoId: Todo["id"]): void {
		this.todos = this.todos.filter((todo: Todo): boolean => todo.id !== todoId);
		this.update();
	}

	public changeTodoStatus(
		todoId: Todo["id"],
		newStatus: TodoStatus | FilterStatus
	): void {
		const todoIndex = this.todos.findIndex(
			(todo: Todo): boolean => todo.id === todoId
		);
		if (todoIndex === -1) return;
		this.todos[todoIndex].status = newStatus;
		this.update();
	}

	public filterByStatus(status: FilterStatus): Observable<Todo[]> {
		this.filterSubject.next(status);
		return this.todosSubject.asObservable();
	}

	private loadFromStorage(): void {
		const storedTodos: string | null = localStorage.getItem(this.storageName);
		if (storedTodos) this.todos = JSON.parse(storedTodos);
		else this.todos = [];
	}

	private update(): void {
		this.todosSubject.next(this.todos);
		this.upgradeStorage();
	}

	private upgradeStorage(): void {
		localStorage.setItem(this.storageName, JSON.stringify(this.todos));
	}

	private setupFiltering(): void {
		this.filterSubject.subscribe((status: FilterStatus): void => {
			const filteredTodos: Todo[] =
				status === "all"
					? this.todos
					: this.todos.filter((todo: Todo): boolean => todo.status === status);
			this.todosSubject.next(filteredTodos);
		});
	}
}
