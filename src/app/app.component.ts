import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import type { FilterStatus, Todo, TodoStatus } from "@interfaces/todo";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodosService } from "@services/todos.service";
import type { Observable } from "rxjs";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { TodoFiltersComponent } from "@components/todo-filters/todo-filters.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		AsyncPipe,
		JsonPipe,
		TodoListComponent,
		TodoFormComponent,
		TodoFiltersComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
	public todos$!: Observable<Todo[]>;
	private todosService: TodosService = inject(TodosService);

	ngOnInit(): void {
		this.todos$ = this.todosService.allTodos();
	}
}
