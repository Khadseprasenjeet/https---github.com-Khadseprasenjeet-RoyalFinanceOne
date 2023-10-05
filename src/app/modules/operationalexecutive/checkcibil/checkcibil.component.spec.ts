import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckcibilComponent } from './checkcibil.component';

describe('CheckcibilComponent', () => {
  let component: CheckcibilComponent;
  let fixture: ComponentFixture<CheckcibilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckcibilComponent]
    });
    fixture = TestBed.createComponent(CheckcibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
