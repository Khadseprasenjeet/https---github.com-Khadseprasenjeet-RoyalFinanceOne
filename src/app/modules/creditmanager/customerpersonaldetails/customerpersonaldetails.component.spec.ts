import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpersonaldetailsComponent } from './customerpersonaldetails.component';

describe('CustomerpersonaldetailsComponent', () => {
  let component: CustomerpersonaldetailsComponent;
  let fixture: ComponentFixture<CustomerpersonaldetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerpersonaldetailsComponent]
    });
    fixture = TestBed.createComponent(CustomerpersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
