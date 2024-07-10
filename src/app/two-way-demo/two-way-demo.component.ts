import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-two-way-demo',
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: './two-way-demo.component.html',
	styles: ``,
})
export class TwoWayDemoComponent {
	userName = '';
}
