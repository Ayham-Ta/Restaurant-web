import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCheck } from './customer-check';

describe('CustomerCheck', () => {
  let component: CustomerCheck;
  let fixture: ComponentFixture<CustomerCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
