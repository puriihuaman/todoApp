import { DatePipe } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { DropdownComponent } from "@components/dropdown/dropdown.component";
import type { Todo, TodoStatus } from "@interfaces/todo";
import { traductions } from "@lang/traductions";
import { TodosService } from "@services/todos.service";

@Component({
	selector: "app-todo-item",
	standalone: true,
	imports: [DatePipe, DropdownComponent],
	templateUrl: "./todo-item.component.html",
	styleUrl: "./todo-item.component.scss",
})
export class TodoItemComponent {
	@Input() todo!: Todo;

	private todosService: TodosService = inject(TodosService);

	get optionSelected() {
		return { name: traductions[this.todo.status], value: this.todo.status };
	}

	public removeTodo(): void {
		if (!this.todo) return;
		this.todosService.removeTodo(this.todo.id);
	}

	changeStatus(newStatus: { name: string; value: TodoStatus }): void {
		if (this.todo.id) {
			this.todosService.changeTodoStatus(this.todo.id, newStatus.value);
		}
	}
}
