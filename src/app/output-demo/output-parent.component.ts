import { Component } from '@angular/core';
import { OutputChildComponent } from './output-child.component';

@Component({
	selector: 'app-output-parent',
	standalone: true,
	imports: [OutputChildComponent],
	templateUrl: './output-parent.component.html',
	styles: ``,
})
export class OutputParentComponent {
	messageFromChild = '';

	handleMessageSent(message: string) {
		console.log('Parent: message received, rendering');
		this.messageFromChild = message;
	}
}
