import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AviataComponentComponent } from './aviata-component/aviata-component.component';
import { AviataServiceService } from './aviata-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AviataComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AviataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
