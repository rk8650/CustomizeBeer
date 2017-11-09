import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { routes } from './app.router';
import { HomePageComponent } from './home-page/home-page.component';
import { LocalBeerShopsComponent } from './local-beer-shops/local-beer-shops.component';
import { OrderBeerComponent } from './order-beer/order-beer.component';
import { CustomizeBeerComponent } from './customize-beer/customize-beer.component';
//import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LocalBeerShopsComponent,
    OrderBeerComponent,
    CustomizeBeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
