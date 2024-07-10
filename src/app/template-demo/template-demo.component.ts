import { Component } from '@angular/core';

@Component({
	selector: 'app-template-demo',
	standalone: true,
	imports: [],
	templateUrl: './template-demo.component.html',
	styles: `
		.underline {
			text-decoration: underline;
		}
	`,
})
export class TemplateDemoComponent {
	displayVariable = 'Hello, there!';
	titleText = 'Everything changes';
	bgColor = 'red';
	styleObject = {
		backgroundColor: 'red',
		color: 'white',
	};
	showUnderline = true;
	cssClassArray = ['underline', 'text-info'];
}
