import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmicalculatorComponent } from './emicalculator.component';

describe('EmicalculatorComponent', () => {
  let component: EmicalculatorComponent;
  let fixture: ComponentFixture<EmicalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmicalculatorComponent]
    });
    fixture = TestBed.createComponent(EmicalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
