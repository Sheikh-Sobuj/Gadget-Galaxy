import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent} from "./container/container.component";
import {HomeComponent} from "./home/home.component";
import {ClientSignUpComponent} from "./Accounts/client-sign-up/client-sign-up.component";
import {ClientLogInComponent} from "./Accounts/client-log-in/client-log-in.component";
import {AdminLogInComponent} from "./Accounts/admin-log-in/admin-log-in.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductDiscountDetailsComponent} from "./product-discount-details/product-discount-details.component";
import {CategoryDetailsComponent} from "./category-details/category-details.component";

const routes: Routes = [
  {path:'',component:ContainerComponent},
  {path:'home-page',component:HomeComponent},
  {path:'category-details',component:CategoryDetailsComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'product-discount-details',component:ProductDiscountDetailsComponent},
  {path:'client-signUp',component:ClientSignUpComponent},
  {path:'client-logIn',component:ClientLogInComponent},
  {path:'admin-logIn',component:AdminLogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
