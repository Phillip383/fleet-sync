import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSelectorComp } from './theme-selector-comp';

describe('ThemeSelectorComp', () => {
  let component: ThemeSelectorComp;
  let fixture: ComponentFixture<ThemeSelectorComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSelectorComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSelectorComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
