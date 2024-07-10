import { Component, inject } from '@angular/core';
import { NgForOf } from '@angular/common';
import { CoffeeDataService } from '../coffee-data.service';

@Component({
	selector: 'app-services-demo',
	standalone: true,
	imports: [NgForOf],
	templateUrl: './services-demo.component.html',
	styles: ``,
})
export class ServicesDemoComponent {
	coffeeService = inject(CoffeeDataService);
	beans = this.coffeeService.getAllBeans();
}
