import { DatePipe } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { DropdownComponent } from "@components/dropdown/dropdown.component";
import { options } from "@config/options";
import type { Option } from "@interfaces/option";
import type { FilterStatus, Todo, TodoStatus } from "@interfaces/todo";
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
	public options: Option<TodoStatus>[] = options;

	private todosService: TodosService = inject(TodosService);

	get optionSelected(): Option<FilterStatus> {
		return { name: traductions[this.todo.status], value: this.todo.status };
	}

	public removeTodo(): void {
		if (!this.todo) return;
		this.todosService.removeTodo(this.todo.id);
	}

	changeStatus(newStatus: Option<TodoStatus | FilterStatus>): void {
		if (this.todo.id) {
			this.todosService.changeTodoStatus(this.todo.id, newStatus.value);
		}
	}
}
