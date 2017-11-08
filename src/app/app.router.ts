/**
 * Created by rahul on 11/8/2017.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {LocalBeerShopsComponent} from "./local-beer-shops/local-beer-shops.component";
import {OrderBeerComponent} from "./order-beer/order-beer.component";
import {CustomizeBeerComponent} from "./customize-beer/customize-beer.component";

export const router: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'local/beer/shops', component: LocalBeerShopsComponent},
  { path: 'order/beer', component: OrderBeerComponent},
  { path: 'customize/beer', component: CustomizeBeerComponent}
];

export const routes: ModuleWithProviders=RouterModule.forRoot(router);
