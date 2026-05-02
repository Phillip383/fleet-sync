import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComp } from './calendar-comp';

describe('CalendarComp', () => {
  let component: CalendarComp;
  let fixture: ComponentFixture<CalendarComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarComp],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
