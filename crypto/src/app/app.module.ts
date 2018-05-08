import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Services
import { CryptoService } from './services/crypto.service';

// Components
import { AppComponent } from './app.component';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
