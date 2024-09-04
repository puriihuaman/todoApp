import { Component, EventEmitter, Input, Output } from "@angular/core";
import { options } from "@config/options";
import type { TodoStatus } from "@interfaces/todo";

@Component({
	selector: "app-dropdown",
	standalone: true,
	imports: [],
	templateUrl: "./dropdown.component.html",
	styleUrl: "./dropdown.component.scss",
})
export class DropdownComponent {
	@Input() placeholder?: string;
	public options: { name: string; value: TodoStatus }[] = options;
	@Input() optionSelected?: {
		name: string;
		value: TodoStatus;
	};
	@Output() onSelectEmitt: EventEmitter<{
		name: string;
		value: TodoStatus;
	}> = new EventEmitter<{
		name: string;
		value: TodoStatus;
	}>();

	public open: boolean = false;

	public toggleDropdown(): void {
		this.open = !this.open;
	}

	public selectOption(option: { name: string; value: TodoStatus }): void {
		this.onSelectEmitt.emit(option);
		this.open = false;
	}
}
