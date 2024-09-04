import { Component, inject } from "@angular/core";
import { DropdownComponent } from "@components/dropdown/dropdown.component";
import { filterOptions } from "@config/options";
import { TodosService } from "@services/todos.service";
import { FilterStatus } from "./../../core/interfaces/todo";

@Component({
	selector: "app-todo-filters",
	standalone: true,
	imports: [DropdownComponent],
	templateUrl: "./todo-filters.component.html",
	styleUrl: "./todo-filters.component.scss",
})
export class TodoFiltersComponent {
	public selectedStatus: { name: string; value: FilterStatus } =
		filterOptions[0];
	public filterOptions: { name: string; value: FilterStatus }[] = filterOptions;

	private todosService: TodosService = inject(TodosService);

	public filterByStatus(selectedStatus: {
		name: string;
		value: FilterStatus;
	}) {}
}
