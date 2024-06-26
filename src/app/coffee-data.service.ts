import { Injectable } from '@angular/core';
import { Coffee, coffeeData } from '../data/coffee-data';

@Injectable({
	providedIn: 'root',
})
export class CoffeeDataService {
	coffeeData: Coffee[];
	constructor() {
		this.coffeeData = coffeeData;
	}

	getAllBeans(): Coffee[] {
		return this.coffeeData;
	}

	findById(id: number): Coffee | undefined {
		return this.coffeeData.find((coffee) => coffee.id === id);
	}

	findByBrand(brandName: string): Coffee[] | undefined {
		return this.coffeeData.filter((coffee) => coffee.brand === brandName);
	}

	addNewCoffee(coffee: Coffee): void {
		this.coffeeData.push(coffee);
	}
}
