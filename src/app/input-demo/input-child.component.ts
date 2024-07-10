import { Component, Input } from '@angular/core';
import { Person } from './input-parent.component';

@Component({
	selector: 'app-input-child',
	standalone: true,
	imports: [],
	templateUrl: './input-child.component.html',
	styles: `
		div {
			border: 2px dotted red;
			padding: 2vh;
		}
	`,
})
export class InputChildComponent {
	// config: alias, required, transform
	@Input()
	personName = '';

	@Input()
	inputPerson: Person | null = null;
}
