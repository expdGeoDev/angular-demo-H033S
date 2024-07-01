export const coffeeData: Coffee[] = [
	{
		id: 1,
		brand: 'Kicking Horse',
		roast: 'dark',
		groundOrBeans: 'beans',
	},
	{
		id: 2,
		brand: 'Greenwood Lake Roasters',
		roast: 'medium',
		groundOrBeans: 'ground',
	},
	{
		id: 3,
		brand: 'Counter Culture',
		roast: 'light',
		groundOrBeans: 'beans',
	},
	{
		id: 4,
		brand: 'Starbucks',
		roast: 'medium',
		groundOrBeans: 'ground',
	},
];

export type RoastType = 'light' | 'medium' | 'dark' | '';
export type GroundOrBeans = 'ground' | 'beans' | '';

export interface Coffee {
	id: number;
	brand: string;
	roast: RoastType;
	groundOrBeans: GroundOrBeans;
	// If you want to limit the numeric values, look here: https://stackoverflow.com/a/39495173
	grind?: number;

	singleOrigin?: boolean;
	flavorNotes?: string;
}
