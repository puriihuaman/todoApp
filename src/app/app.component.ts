import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import type { Todo } from "@interfaces/todo";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodosService } from "@services/todos.service";
import type { Observable } from "rxjs";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [AsyncPipe, JsonPipe, TodoListComponent],
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
