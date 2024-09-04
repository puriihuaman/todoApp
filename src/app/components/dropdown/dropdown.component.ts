import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { options } from "@config/options";
import type { Option } from "@interfaces/option";
import type { FilterStatus, TodoStatus } from "@interfaces/todo";

@Component({
	selector: "app-dropdown",
	standalone: true,
	imports: [NgClass],
	templateUrl: "./dropdown.component.html",
	styleUrl: "./dropdown.component.scss",
})
export class DropdownComponent {
	@Input() placeholder?: string;
	@Input() options!: Option<TodoStatus | FilterStatus>[];
	@Input() optionSelected?: Option<TodoStatus | FilterStatus>;
	@Output() onSelectEmitt: EventEmitter<Option<TodoStatus | FilterStatus>> =
		new EventEmitter<Option<TodoStatus | FilterStatus>>();

	public open: boolean = false;

	public toggleDropdown(): void {
		this.open = !this.open;
	}

	public selectOption(option: Option<TodoStatus | FilterStatus>): void {
		this.onSelectEmitt.emit(option);
		this.open = false;
	}
}
