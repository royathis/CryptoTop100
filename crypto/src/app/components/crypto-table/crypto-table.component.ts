import { Component, OnInit } from '@angular/core';
import { CryptoCurrency } from './../../models/crypto-currency.class';
import { CryptoService } from './../../services/crypto.service';


@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent implements OnInit {

  public top100Cryptos: CryptoCurrency[];
  public filteredCryptos: CryptoCurrency[];
  public sortValues: any = { rank: false, marketCap: true, volume: false, change24: false, price: false, name: false };
  public priceUnit: string = 'USD';

  constructor(public cryptoService: CryptoService) { 
    this.getTop100Cryptos();
  }

  ngOnInit() {
  }

  public getTop100Cryptos(): void {
    this.cryptoService.getAllCryptos().subscribe((data: any) => {
      //console.log(data);
      this.top100Cryptos = data.map((element: any) => {
        return new CryptoCurrency(element);
      });
      //console.log(this.top100Cryptos);
      this.filteredCryptos = this.top100Cryptos;
    });
  }

  public listenFilterCryptos(e: CryptoCurrency[]){
    //console.log(e);
    this.filteredCryptos = e;
  }

  public listenPriceUnit(e: string){
    this.priceUnit = e;
    console.log(this.priceUnit);
  }

  public sortString(sortValue: boolean): void {
    if(sortValue) {
      this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA > nameB) {
          return -1;
        } else if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }
  }

  public sortNumeric(sortValue: boolean, key: string) {
    if(sortValue) {
      this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
        return a[key] - b[key];
      });
    } else {
      this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
        return b[key] - a[key];
      });
    }
  }

}
