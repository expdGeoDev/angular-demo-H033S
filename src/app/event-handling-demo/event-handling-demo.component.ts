import { Component } from '@angular/core';

@Component({
	selector: 'app-event-handling-demo',
	standalone: true,
	imports: [],
	templateUrl: './event-handling-demo.component.html',
	styles: ``,
})
export class EventHandlingDemoComponent {
	favoriteColor = 'orange';

	handleClick() {
		console.log('You clicked on the butotn');
	}

	showEvent(event: MouseEvent) {
		console.log('Event metadata:', event);
	}

	changeColor(color: string) {
		this.favoriteColor = color;
	}
}
