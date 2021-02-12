import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule, RouterState, Router } from '@angular/router';
import { CoinbinanceModule } from './coinbinance/coinbinance.module';
import { CoinbinanceAppComponent } from './coinbinance/coinbinance-app.component';
import { FormsModule } from '@angular/forms';

// const routes: Routes=
// [
//   {path:'coinbinance', loadChildren:()=> import('./coinbinance/coinbinance.module').then(m=>m.CoinbinanceModule)},  
//   {path:'**', redirectTo:'coinbinance'}
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
