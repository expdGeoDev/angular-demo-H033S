import { Component } from '@angular/core';
import { Coffee, coffeeData } from '../../data/coffee-data';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-interative-demo',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './interative-demo.component.html',
	styles: ``,
})
export class InterativeDemoComponent {
	beans: Coffee[] = coffeeData;
}
