import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWishlist } from './customer-wishlist';

describe('CustomerWishlist', () => {
  let component: CustomerWishlist;
  let fixture: ComponentFixture<CustomerWishlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerWishlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerWishlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
