import { Component, OnInit } from '@angular/core';
import { CryptoService } from './../../services/crypto.service';
import { BitcoinPrice } from './../../models/bitcoin-price.class';
import { PriceCoordinates } from './../../models/price-coordinates.interface';



@Component({
  selector: 'app-bitcoin-stats',
  templateUrl: './bitcoin-stats.component.html',
  styleUrls: ['./bitcoin-stats.component.css']
})
export class BitcoinStatsComponent implements OnInit {

  public bitcoinStats: BitcoinPrice = new BitcoinPrice();
  public prices: number[];
  public dates: string[];
  public options: any;
  //public type: any;
  public chartData: any;

  constructor(public cryptoService: CryptoService) { 
    this.cryptoService.getBitCoinPriceStats().subscribe((data: any) => {
      // console.log(data);
      this.bitcoinStats = new BitcoinPrice(data);
      this.prices = this.convertPrices();
      // console.log(this.prices);
      this.dates = this.convertDates();
      // console.log(this.dates);


      // https://github.com/emn178/angular2-chartjs
      // this.type = 'line';
      this.chartData = {
        //labels: ["January", "February", "March", "April", "May", "June", "July"],
        labels: [...this.dates],
        datasets: [
          {
            label: `Bitcoin (${this.bitcoinStats.unit})`,
            data: [...this.prices],
            backgroundColor: 'rgba(0,0,0,.5)',
            borderColor: '#6699f6'
          }
        ]
      };
      this.options = {
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(255, 255, 255, 0.3)"
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(255, 255, 255, 0.3)"
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      };

      



    });
  }

  public convertDates(): string[] {
    const dates = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
      const rawDate = new Date(coordinates.x * 1000);

      return `${rawDate.getMonth()}/${rawDate.getDay()}/${rawDate.getFullYear()}`;
    });

    return dates;
  }

  public convertPrices(): number[]{
    const prices = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
      return Number((coordinates.y).toFixed(2));
    }); 

    return prices;
  }

  
  ngOnInit() {
  }

}
