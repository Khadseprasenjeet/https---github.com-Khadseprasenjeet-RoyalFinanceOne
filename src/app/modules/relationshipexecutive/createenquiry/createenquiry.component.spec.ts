import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateenquiryComponent } from './createenquiry.component';

describe('CreateenquiryComponent', () => {
  let component: CreateenquiryComponent;
  let fixture: ComponentFixture<CreateenquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateenquiryComponent]
    });
    fixture = TestBed.createComponent(CreateenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
