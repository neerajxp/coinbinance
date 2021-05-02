import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule, RouterState, Router } from '@angular/router';
import { CoinbinanceModule } from './coinbinance/coinbinance.module';
import { CoinbinanceAppComponent } from './coinbinance/coinbinance-app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
 const routes: Routes=
 [
   {path:'coinbinance', loadChildren:()=> import('./coinbinance/coinbinance.module').then(m=>m.CoinbinanceModule)},  
   {path:'**', redirectTo:'coinbinance'}
 ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
    CoinbinanceModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
