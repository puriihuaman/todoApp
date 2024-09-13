import { AsyncPipe } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import { TodoFiltersComponent } from "@components/todo-filters/todo-filters.component";
import type { Todo } from "@interfaces/todo";
import { TodosService } from "@services/todos.service";
import type { Observable } from "rxjs";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		AsyncPipe,
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
