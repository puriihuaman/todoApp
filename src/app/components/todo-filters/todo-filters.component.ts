import { Component, inject } from "@angular/core";
import { DropdownComponent } from "@components/dropdown/dropdown.component";
import { filterOptions } from "@config/options";
import { TodosService } from "@services/todos.service";
import { FilterStatus } from "./../../core/interfaces/todo";
import type { Option } from "@interfaces/option";

@Component({
	selector: "app-todo-filters",
	standalone: true,
	imports: [DropdownComponent],
	templateUrl: "./todo-filters.component.html",
	styleUrl: "./todo-filters.component.scss",
})
export class TodoFiltersComponent {
	public selectedStatus: Option<FilterStatus> = filterOptions[0];
	public options: Option<FilterStatus>[] = filterOptions;
	public filterOptions: Option<FilterStatus>[] = filterOptions;

	private todosService: TodosService = inject(TodosService);

	public filterByStatus(selectedStatus: Option<FilterStatus>): void {
		console.log(selectedStatus);
		this.todosService.filterByStatus(selectedStatus.value);
	}
}
