/**
 * Created by rahul on 11/9/2017.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http'
import {observable} from "rxjs/symbol/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AppService {
  private _localShopList = '../assets/shopListData.json';

  constructor( private _http : Http ){}

      getLocalBeerShopList(){
        return this._http.get(this._localShopList)
          .map((response:Response) => response.json())
          .catch(this._errorHandler);
      }
      _errorHandler(error : Response){
        console.error(error);
        return observable.throw(error || "server error");
      }
}

