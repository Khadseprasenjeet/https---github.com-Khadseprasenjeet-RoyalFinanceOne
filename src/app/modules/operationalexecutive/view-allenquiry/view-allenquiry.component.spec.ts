import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllenquiryComponent } from './view-allenquiry.component';

describe('ViewAllenquiryComponent', () => {
  let component: ViewAllenquiryComponent;
  let fixture: ComponentFixture<ViewAllenquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllenquiryComponent]
    });
    fixture = TestBed.createComponent(ViewAllenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
