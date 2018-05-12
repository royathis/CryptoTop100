import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CryptoCurrency } from './../../models';


@Component({
  selector: 'app-crypto-filter',
  templateUrl: './crypto-filter.component.html',
  styleUrls: ['./crypto-filter.component.css']
})
export class CryptoFilterComponent implements OnInit {

  @Input() public cryptos: CryptoCurrency[];
  @Output() public filteredCryptosEvent = new EventEmitter<CryptoCurrency[]>();
  @Output() public priceUnitEvent = new EventEmitter<string>();
  public filteredCryptos: CryptoCurrency[] = [];
  public percentChange: string = 'All';
  public showAmount: number = 100;
  public priceUnit: string = 'USD';

  constructor() { 
  }
  
  ngOnInit() {
/*     this.filteredCryptos = this.cryptos;
    console.log(this.filteredCryptos); */
  }

  public filterCryptos(): void {
    this.percentChangeFilter();
    this.showOnlyFilter();
  }

  public filterEvent(): void {
    this.filteredCryptosEvent.emit(this.filteredCryptos);
  }

  public priceEvent(): void {
    this.priceUnitEvent.emit(this.priceUnit);
  }

  public percentChangeFilter(): void {
    this.filteredCryptos = this.cryptos.filter((crypto: CryptoCurrency) => {
      if(this.percentChange === 'Positive'){
        return crypto.percent_change_24h >= 0;
      } else if (this.percentChange === 'Negative') {
        return crypto.percent_change_24h < 0;
      }
      return crypto;
    });
     //console.log(this.filteredCryptos);
  }

  public showOnlyFilter(): void {
    this.filteredCryptos = this.filteredCryptos.slice(0, this.showAmount);
    // console.log(this.filteredCryptos);
    this.filterEvent();
    this.priceEvent();
  }

 

 

}
