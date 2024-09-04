import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "@components/dropdown/dropdown.component";
import { options } from "@config/options";
import type { Option } from "@interfaces/option";
import type { FilterStatus, Todo, TodoStatus } from "@interfaces/todo";
import { TodosService } from "@services/todos.service";

@Component({
	selector: "app-todo-form",
	standalone: true,
	imports: [FormsModule, DropdownComponent],
	templateUrl: "./todo-form.component.html",
	styleUrl: "./todo-form.component.scss",
})
export class TodoFormComponent {
	private todosService: TodosService = inject(TodosService);

	public options: Option<TodoStatus>[] = options;
	public newDescription: string = "";
	public newStatus: Option<TodoStatus | FilterStatus> = options[0];
	public statusOptions: Option<TodoStatus>[] = options;
	public hasError: boolean = false;
	public message: string = "";

	constructor() {}

	public addTodo(): void {
		this.newDescription.trim() === "" || !this.newStatus.value
			? (this.hasError = true)
			: (this.hasError = false);

		if (!this.hasError) {
			console.log("Hay datos");
			const newTodo: Todo = {
				id: crypto.randomUUID(),
				description: this.newDescription,
				status: this.newStatus.value,
				createdAt: new Date(),
			};
			console.log(newTodo);
			// this.todosService.addTodo(newTodo);
		} else {
			this.message = "Hay campos vacíos";
			console.log("hay campos vacíos");
		}

		this.newDescription = "";
		this.newStatus = options[0];
	}

	changeStatus(newStatus: Option<TodoStatus | FilterStatus>): void {
		this.newStatus = newStatus;
	}
}
