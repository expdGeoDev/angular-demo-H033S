import { Component } from '@angular/core';
import { OutputParentComponent } from './output-parent.component';

@Component({
	selector: 'app-output-demo',
	standalone: true,
	imports: [OutputParentComponent],
	templateUrl: './output-demo.component.html',
	styles: ``,
})
export class OutputDemoComponent {}
