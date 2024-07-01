import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertismentComponent } from './home/advertisment/advertisment.component';
import { BannerComponent } from './home/banner/banner.component';
import { NewArrivalComponent } from './home/new-arrival/new-arrival.component';
import { TopProductComponent } from './home/top-product/top-product.component';
import { FeatureProductComponent } from './home/feature-product/feature-product.component';
import { HomeComponent } from './home/home.component';
import { ClientSignUpComponent } from './Accounts/client-sign-up/client-sign-up.component';
import { AdminLogInComponent } from './Accounts/admin-log-in/admin-log-in.component';
import { ClientLogInComponent } from './Accounts/client-log-in/client-log-in.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsBannerComponent } from './product-details/product-details-banner/product-details-banner.component';
import { ProductDetailsMoreInfoComponent } from './product-details/product-details-more-info/product-details-more-info.component';
import { ProductDiscountDetailsComponent } from './product-discount-details/product-discount-details.component';
import { ProductDiscountDetailsBannerComponent } from './product-discount-details/product-discount-details-banner/product-discount-details-banner.component';
import { ProductDiscountDetailsMoreInfoComponent } from './product-discount-details/product-discount-details-more-info/product-discount-details-more-info.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { FilterComponent } from './category-details/filter/filter.component';
import { MacbookComponent } from './category-details/macbook/macbook.component';
import { PeopleAlsoSearchComponent } from './category-details/people-also-search/people-also-search.component';


@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        HeaderComponent,
        FooterComponent,
        AdvertismentComponent,
        BannerComponent,
        NewArrivalComponent,
        TopProductComponent,
        FeatureProductComponent,
        HomeComponent,
        ClientSignUpComponent,
        AdminLogInComponent,
        ClientLogInComponent,
        ProductDetailsComponent,
        ProductDetailsBannerComponent,
        ProductDetailsMoreInfoComponent,
        ProductDiscountDetailsComponent,
        ProductDiscountDetailsBannerComponent,
        ProductDiscountDetailsMoreInfoComponent,
        CategoryDetailsComponent,
        FilterComponent,
        MacbookComponent,
        PeopleAlsoSearchComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
  exports: [
    ContainerComponent,
    HeaderComponent,
    FooterComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
