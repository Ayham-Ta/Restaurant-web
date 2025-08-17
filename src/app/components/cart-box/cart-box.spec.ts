import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBox } from './cart-box';

describe('CartBox', () => {
  let component: CartBox;
  let fixture: ComponentFixture<CartBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
