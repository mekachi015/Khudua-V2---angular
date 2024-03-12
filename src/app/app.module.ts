import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponentComponent,
    routingComponents,
    ProductsComponentComponent,
    ServiceComponentComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
