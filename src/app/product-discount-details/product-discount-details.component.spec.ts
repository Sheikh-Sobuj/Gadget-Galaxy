import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiscountDetailsComponent } from './product-discount-details.component';

describe('ProductDiscountDetailsComponent', () => {
  let component: ProductDiscountDetailsComponent;
  let fixture: ComponentFixture<ProductDiscountDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDiscountDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductDiscountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
