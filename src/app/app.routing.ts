import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { EventHandlingDemoComponent } from './event-handling-demo/event-handling-demo.component';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { InterativeDemoComponent } from './interative-demo/interative-demo.component';
import { ServicesDemoComponent } from './services-demo/services-demo.component';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';
import { CustomGreetingComponent } from './custom-greeting/custom-greeting.component';
import { AddCoffeeFormComponent } from './add-coffee-form/add-coffee-form.component';
import { SuccessMsgComponent } from './add-coffee-form/success-msg/success-msg.component';

// Technically the type is Ng2StateDeclaration[]
export const routerStates = [
	{
		name: 'template-demo',
		url: '/template-demo',
		component: TemplateDemoComponent,
		label: 'Template Demo',
	},
	{
		name: 'event-handling-demo',
		url: '/event-handling-demo',
		component: EventHandlingDemoComponent,
		label: 'Event Handling',
	},
	{
		name: 'input-demo',
		url: '/input-demo',
		component: InputDemoComponent,
		label: '@Input()',
	},
	{
		name: 'output-demo',
		url: '/output-demo',
		component: OutputDemoComponent,
		label: '@Output()',
	},
	{
		name: 'two-way-demo',
		url: '/two-way-demo',
		component: TwoWayDemoComponent,
		label: 'Two-Way Data Binding',
	},
	{
		name: 'iterative-demo',
		url: '/iterative-demo',
		component: InterativeDemoComponent,
		label: 'Iterating over data',
	},
	{
		name: 'services-demo',
		url: '/services-demo',
		component: ServicesDemoComponent,
		label: 'Services',
	},
	{
		name: 'http-client-demo',
		url: '/http-client-demo',
		component: HttpClientDemoComponent,
		label: 'Http Client',
	},
	{
		name: 'custom-greeting',
		url: '/greeting',
		component: CustomGreetingComponent,
		label: 'Our custom component',
	},
	{
		name: 'add-coffee-form',
		url: '/add-coffee',
		component: AddCoffeeFormComponent,
		label: 'Add Coffee',
	},
	{
		name: 'success-msg',
		url: '/add-coffee/success',
		component: SuccessMsgComponent,
		label: 'Coffee Added',
	},
];
