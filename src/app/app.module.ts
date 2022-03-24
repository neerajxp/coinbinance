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
import { PortfoliototalComponent } from './pages/tools/portfoliototal/portfoliototal.component';
import { from } from 'rxjs';
import { LayoutLearnModule } from './layouts/layout-learn/layout-learn.module'; 
import { BlogComponent } from './pages/learn/blog/blog.component';
import { HowtoComponent } from './pages/learn/howto/howto.component';
import { LayoutKinuModule } from './layouts/layout-kinu/layout-kinu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, PortfoliototalComponent, HowtoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutSideModule,
    LayoutFullModule,
    LayoutToolsModule,
    LayoutHomeModule,
    LayoutTradingModule,
    LayoutLearnModule,
    LayoutKinuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
