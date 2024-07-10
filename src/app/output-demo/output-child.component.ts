import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-output-child',
	standalone: true,
	imports: [],
	templateUrl: './output-child.component.html',
	styles: ``,
})
export class OutputChildComponent {
	@Output()
	messageSent = new EventEmitter<string>();

	handleClick() {
		console.log('Child: button clicked, sending message...');
		this.messageSent.emit('Hi, parent!');
	}
}
