import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Services
import { CryptoService } from './services/crypto.service';

// Components
import { AppComponent } from './app.component';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { BitcoinStatsComponent } from './components/bitcoin-stats/bitcoin-stats.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ChartModule } from 'angular2-chartjs';
import { CryptoFilterComponent } from './components/crypto-filter/crypto-filter.component';

const appRoutes: Routes = [
  { path: '', component: CryptoTableComponent },
  { path: 'bitcoinStats', component: BitcoinStatsComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    BitcoinStatsComponent,
    NotFoundComponent,
    CryptoFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
