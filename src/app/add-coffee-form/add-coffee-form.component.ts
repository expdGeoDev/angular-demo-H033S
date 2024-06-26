import { Component } from '@angular/core';
import { Coffee } from '../../data/coffee-data';
import { FormsModule } from '@angular/forms';
import { CoffeeDataService } from '../coffee-data.service';

@Component({
	selector: 'app-add-coffee-form',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './add-coffee-form.component.html',
	styleUrl: './add-coffee-form.component.css',
})
export class AddCoffeeFormComponent {
	coffee: Coffee;

	constructor(private coffeeService: CoffeeDataService) {
		this.coffee = this.createEmptyCoffee();
	}

	createEmptyCoffee(): Coffee {
		return {
			id: 0,
			brand: '',
			groundOrBeans: 'ground',
			roast: 'dark',
			grind: 0,
			singleOrigin: false,
			flavorNotes: '',
		};
	}

	addNewCoffee(): void {
		this.coffeeService.addNewCoffee(this.coffee);
		this.coffee = this.createEmptyCoffee();
	}
}
