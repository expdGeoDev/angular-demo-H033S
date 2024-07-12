import { Component } from '@angular/core';
import { Coffee, RoastType, coffeeData } from '../../data/coffee-data';
import { FormsModule, NgForm } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { NgIf } from '@angular/common';
import { CoffeeHttpService } from '../coffee-http.service';
import { CoffeeDataService } from '../coffee-data.service';
import { CustomRangeComponent } from "../custom-range/custom-range.component";

@Component({
    selector: 'app-add-coffee-form',
    standalone: true,
    templateUrl: './add-coffee-form.component.html',
    styleUrl: './add-coffee-form.component.css',
    imports: [FormsModule, UIRouterModule, SuccessMsgComponent, NgIf, CustomRangeComponent]
})

// CoffeeService
// Coffee

export class AddCoffeeFormComponent {
	coffee: Coffee = this.createEmptyCoffee();
	addedSuccessful: boolean = false;
	grindLevelList: string[] = [
		'Extra Coarse',
		'Coarse',
		'Medium-Coarse',
		'Medium',
		'Medium-Fine',
		'Fine',
		'Extra-Fine'
	]

	constructor(private coffeeService: CoffeeHttpService) {}

	createEmptyCoffee(): Coffee {
		return {
			id: 0,
			brand: '',
			groundOrBeans: '',
			roast: '',
			grind: 0,
			singleOrigin: false,
			flavorNotes: '',
		};
	}

	addNewCoffee(form: NgForm): void {
		this.addedSuccessful = false;
		this.coffeeService.addNewCoffee(this.coffee);
		this.coffee = this.createEmptyCoffee();

		this.addedSuccessful = true;
		form.reset();
	}

	resetCoffeeInstance(form: NgForm): void {
		this.coffee = this.createEmptyCoffee();
		form.resetForm();
	}

	setRoastType(roastType: string): void {
		this.coffee.roast = roastType as RoastType;
	}
}
