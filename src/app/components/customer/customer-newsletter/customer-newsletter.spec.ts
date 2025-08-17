import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNewsletter } from './customer-newsletter';

describe('CustomerNewsletter', () => {
  let component: CustomerNewsletter;
  let fixture: ComponentFixture<CustomerNewsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerNewsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerNewsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
