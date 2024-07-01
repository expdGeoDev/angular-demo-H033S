import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from '../data/coffee-data';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CoffeeHttpService {
	baseUrl = 'http://localhost:8000';
	constructor(private client: HttpClient) {}

	getAllBeans(): Observable<Coffee[]> {
		return this.client.get<Coffee[]>(`${this.baseUrl}/coffee`);
	}

	addNewCoffee(coffee: Coffee) {
		this.client
			.post(`${this.baseUrl}/coffee`, JSON.stringify(coffee), {
				headers: {
					Accept: 'application/json',
					'Cache-Control': 'no-cache',
					'Content-Type': 'application/json',
				},
			})
			.subscribe();

		console.log(`Added ${coffee.brand}`);
	}
}
