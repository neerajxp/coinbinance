import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutSideModule } from './layouts/layout-side/layout-side.module';
import { LayoutFullModule } from './layouts/layout-full/layout-full.module';
import { LayoutToolsModule } from './layouts/layout-tools/layout-tools.module';
 
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutSideModule,
    LayoutFullModule,
    LayoutToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
