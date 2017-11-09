import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-local-beer-shops',
  templateUrl: './local-beer-shops.component.html',
  styleUrls: ['./local-beer-shops.component.css'],
  providers: [AppService]
  //encapsulation: ViewEncapsulation.None
})
export class LocalBeerShopsComponent implements OnInit {
  localBeerShopList=[];
  shopListErrMsg : string;

  constructor( private _appService : AppService ){}
  ngOnInit() {
    this._appService.getLocalBeerShopList()
      .subscribe(resShopListData => this.localBeerShopList = resShopListData
                , resShopListError => this.shopListErrMsg=resShopListError);
  }
}
