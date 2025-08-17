import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderDetail } from './customer-order-detail';

describe('CustomerOrderDetail', () => {
  let component: CustomerOrderDetail;
  let fixture: ComponentFixture<CustomerOrderDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerOrderDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
