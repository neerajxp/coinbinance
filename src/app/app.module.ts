import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutSideModule } from './layouts/layout-side/layout-side.module';
import { LayoutFullModule } from './layouts/layout-full/layout-full.module';
import { LayoutToolsModule } from './layouts/layout-tools/layout-tools.module'; 
import { LayoutTradingModule } from './layouts/layout-trading/layout-trading.module';
import { LayoutHomeModule } from './layouts/layout-home/layout-home.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutSideModule,
    LayoutFullModule,
    LayoutToolsModule,
    LayoutHomeModule,
    LayoutTradingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
