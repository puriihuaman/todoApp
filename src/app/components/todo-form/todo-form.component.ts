import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "@components/dropdown/dropdown.component";
import { options } from "@config/options";
import type { Todo, TodoStatus } from "@interfaces/todo";
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
	public newStatus: { name: string; value: TodoStatus } = options[0];
	public statusOptions: { name: string; value: TodoStatus }[] = options;

	constructor() {}

	public addTodo(): void {
		const newTodo: Todo = {
			id: crypto.randomUUID(),
			description: this.newDescription,
			status: this.newStatus.value,
			createdAt: new Date(),
		};
		console.log(newTodo);
		this.todosService.addTodo(newTodo);

		this.newDescription = "";
		this.newStatus = options[0];
	}

	changeStatus(newStatus: { name: string; value: TodoStatus }): void {
		this.newStatus = newStatus;
	}
}
