import { Component, inject, Input } from "@angular/core";
import { TodoItemComponent } from "@components/todo-item/todo-item.component";
import type { Todo } from "@interfaces/todo";
import { TodosService } from "@services/todos.service";

@Component({
  selector: "app-todo-list",
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.scss",
})
export class TodoListComponent {
  @Input() todoList: Todo[] = [];
  private todoService: TodosService = inject(TodosService);

  public removeTodo() {}
}
