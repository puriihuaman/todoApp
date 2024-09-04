import { Component, Input } from "@angular/core";
import { TodoItemComponent } from "@components/todo-item/todo-item.component";
import type { Todo } from "@interfaces/todo";

@Component({
	selector: "app-todo-list",
	standalone: true,
	imports: [TodoItemComponent],
	templateUrl: "./todo-list.component.html",
	styleUrl: "./todo-list.component.scss",
})
export class TodoListComponent {
	@Input() todoList: Todo[] = [];
}
