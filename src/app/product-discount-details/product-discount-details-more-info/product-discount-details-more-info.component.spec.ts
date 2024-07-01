import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiscountDetailsMoreInfoComponent } from './product-discount-details-more-info.component';

describe('ProductDiscountDetailsMoreInfoComponent', () => {
  let component: ProductDiscountDetailsMoreInfoComponent;
  let fixture: ComponentFixture<ProductDiscountDetailsMoreInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDiscountDetailsMoreInfoComponent]
    });
    fixture = TestBed.createComponent(ProductDiscountDetailsMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
