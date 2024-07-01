import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsBannerComponent } from './product-details-banner.component';

describe('ProductDetailsBannerComponent', () => {
  let component: ProductDetailsBannerComponent;
  let fixture: ComponentFixture<ProductDetailsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsBannerComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
