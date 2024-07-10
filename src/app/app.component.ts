import { Component } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { routerStates } from './app.routing';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true,
	imports: [UIRouterModule, CommonModule],
})
export class AppComponent {
	protected readonly routerStates = routerStates;
}
