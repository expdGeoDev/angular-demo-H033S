import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomRangeComponent } from './custom-range.component';
import { DebugElement } from '@angular/core';

describe('CustomRangeComponent', () => {
  let component: CustomRangeComponent;
  let fixture: ComponentFixture<CustomRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomRangeComponent);
    component = fixture.componentInstance;

		//Overriding Component Inputs
		component.elements = ['A', 'B', 'C', 'D'];
		component.label = 'Test Component'

    fixture.detectChanges();
  });

	const getNativeById = function ( el: DebugElement, id: string ){
		return el.name === 'p' &&
				   el.attributes['id']===id;
	}

	it('should pass', () => {
		expect(true).toBeTrue();
	});

	it('should mapped label element',() => {
		const label = fixture.debugElement.query(el => getNativeById(el, 'label')).nativeElement;
		expect(label.innerText).toMatch(component.label);
	});

	it('should mapped currentValue element',() => {
		const currentValue = fixture.debugElement.query(el => getNativeById(el, 'currentValue')).nativeElement;
		expect(currentValue.innerText).toMatch(component.getCurrentValue());
	});

	it('should mapped minValue element',() => {
		const minValue = fixture.debugElement.query(el => getNativeById(el, 'minValue')).nativeElement;
		expect(minValue.innerText).toMatch(component.getMinimumValue());
	});

	it('should mapped maxValue element',() => {
		const maxValue = fixture.debugElement.query(el => getNativeById(el, 'maxValue')).nativeElement;
		expect(maxValue.innerText).toMatch(component.getMaximumValue());
	});
});
