import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "@components/dropdown/dropdown.component";
import { filterOptions, options } from "@config/options";
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

	public newDescription: string = "";
	public newStatus: Option<string, TodoStatus> = options[0];
	public statusOptions: { name: string; value: TodoStatus | FilterStatus }[] =
		filterOptions;
	public hasError: boolean = false;
	public message: string = "";

	constructor() {}

	public addTodo(): void {
		this.newDescription.trim() === "" || !this.newStatus.value
			? (this.hasError = true)
			: (this.hasError = false);

		if (!this.hasError) {
			console.log("Hay datos");
			const newTodo: Todo<TodoStatus> = {
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

	changeStatus(newStatus: Option<string, TodoStatus>): void {
		this.newStatus = newStatus;
	}
}
