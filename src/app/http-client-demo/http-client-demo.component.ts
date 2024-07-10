import { Component, inject } from '@angular/core';
import { CoffeeHttpService } from '../coffee-http.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { Coffee } from '../../data/coffee-data';

@Component({
	selector: 'app-http-client-demo',
	standalone: true,
	imports: [NgForOf, AsyncPipe],
	templateUrl: './http-client-demo.component.html',
	styles: ``,
})
export class HttpClientDemoComponent {
	coffeeService: CoffeeHttpService = inject(CoffeeHttpService);

	// Adding '$' at the end is a convention
	beans$!: Observable<Coffee[]>;

	// Lifecycle method, will load the data once when the component is initialized
	// https://angular.dev/guide/components/lifecycle
	ngOnInit() {
		this.beans$ = this.coffeeService.getAllBeans();
	}
}
