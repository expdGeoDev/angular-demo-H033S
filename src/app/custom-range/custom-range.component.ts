import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-range',
  standalone: true,
  imports: [],
  templateUrl: './custom-range.component.html',
  styleUrl: './custom-range.component.css'
})
export class CustomRangeComponent {

	@Input() elements!: string[];
	@Input() label!:string;

	maxValue!: number;
  currentValue: number = 0;

	ngAfterContentInit(){
		this.setMaximumValue(this.elements);
	}

	setMaximumValue(elements: string[]):void {
		this.maxValue = 0;
		if(elements){

			const expectedValue = elements.length - 1;
			if(expectedValue > 0){
				this.maxValue = expectedValue;
			}
		}
	}

	getMinimumValue():string {
		return this.elements[0];
	}

	getCurrentValue():string {
		return this.elements[this.currentValue];
	}

	getMaximumValue():string {
		return this.elements[this.maxValue];
	}

	setValueOnIndex(index:string): void{
		 this.currentValue = +index;
	}
}





