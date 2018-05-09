import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Services
import { CryptoService } from './services/crypto.service';

// Components
import { AppComponent } from './app.component';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { BitcoinStatsComponent } from './components/bitcoin-stats/bitcoin-stats.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
