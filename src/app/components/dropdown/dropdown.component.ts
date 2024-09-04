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
	// public options: { name: string; value: TodoStatus }[] = options;
	@Input() options: Option<string, TodoStatus | FilterStatus>[] = [];
	@Input() optionSelected?: Option<string, TodoStatus | FilterStatus>;
	@Output() onSelectEmitt: EventEmitter<
		Option<string, TodoStatus | FilterStatus>
	> = new EventEmitter<Option<string, TodoStatus | FilterStatus>>();

	public open: boolean = false;

	public toggleDropdown(): void {
		this.open = !this.open;
	}

	public selectOption(option: Option<string, TodoStatus | FilterStatus>): void {
		this.onSelectEmitt.emit(option);
		this.open = false;
	}
}
