import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousloandetailsComponent } from './previousloandetails.component';

describe('PreviousloandetailsComponent', () => {
  let component: PreviousloandetailsComponent;
  let fixture: ComponentFixture<PreviousloandetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousloandetailsComponent]
    });
    fixture = TestBed.createComponent(PreviousloandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
