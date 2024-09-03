import { DatePipe } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import type { Todo } from "@interfaces/todo";
import { TodosService } from "@services/todos.service";

@Component({
	selector: "app-todo-item",
	standalone: true,
	imports: [DatePipe],
	templateUrl: "./todo-item.component.html",
	styleUrl: "./todo-item.component.scss",
})
export class TodoItemComponent {
	@Input() todo!: Todo;

	private todosService: TodosService = inject(TodosService);

	public removeTodo(): void {
		if (!this.todo) return;
		this.todosService.removeTodo(this.todo.id);
	}
}
