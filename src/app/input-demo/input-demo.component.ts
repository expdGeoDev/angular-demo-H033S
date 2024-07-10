import { Component } from '@angular/core';
import { InputParentComponent } from './input-parent.component';

@Component({
	selector: 'app-input-demo',
	standalone: true,
	imports: [InputParentComponent],
	templateUrl: './input-demo.component.html',
	styles: ``,
})
export class InputDemoComponent {}
