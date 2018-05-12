
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { BitcoinMarket, BitcoinPrice, CryptoCurrency } from './../models';

@Injectable()
export class CryptoService {

  constructor(public http: HttpClient) { }

  public getBitcoinmarketCap(): Observable <BitcoinMarket> {
    return this.http.get('https://api.coinmarketcap.com/v1/global/').map((data: any) => {
      return new BitcoinMarket(data);
    });
  }

  public getAllCryptos(): Observable <CryptoCurrency[]> {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/').map((data: any) => {
      return data.map((crypto: any) => {
        return new CryptoCurrency(crypto);
      });
    });
  }

  public getBitCoinPriceStats(): Observable <BitcoinPrice> {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.blockchain.info/charts/market-price?format=json&lang=en').map((data: any) => {
      return new BitcoinPrice(data);
    });
  }

}
