import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDiscountDetailsBannerComponent } from './product-discount-details-banner.component';

describe('ProductDiscountDetailsBannerComponent', () => {
  let component: ProductDiscountDetailsBannerComponent;
  let fixture: ComponentFixture<ProductDiscountDetailsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDiscountDetailsBannerComponent]
    });
    fixture = TestBed.createComponent(ProductDiscountDetailsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
