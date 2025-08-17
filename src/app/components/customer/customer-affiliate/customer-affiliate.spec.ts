import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAffiliate } from './customer-affiliate';

describe('CustomerAffiliate', () => {
  let component: CustomerAffiliate;
  let fixture: ComponentFixture<CustomerAffiliate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAffiliate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAffiliate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
