import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LocalBeerShopsComponent } from './beer/local-beer-shops.component'
import { OrderBeerComponent } from './beer/order-beer.component';
import { CustomizeBeerComponent } from './beer/customize-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalBeerShopsComponent,
    OrderBeerComponent,
    CustomizeBeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : ' local/beer/shops ' , component :  LocalBeerShopsComponent },
      { path : ' order/beer ' , component : OrderBeerComponent },
      { path : ' customize/beer ' , component : CustomizeBeerComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
