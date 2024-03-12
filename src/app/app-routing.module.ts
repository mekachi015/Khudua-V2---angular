import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component:HomeComponentComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'products', component:ProductsComponentComponent},
  {path: 'services', component:ServiceComponentComponent},
  {path: 'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[AboutUsComponent];
