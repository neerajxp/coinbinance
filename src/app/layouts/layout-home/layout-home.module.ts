import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';  
import { LayoutHomeComponent } from './layout-home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { NewsComponent } from 'src/app/pages/home/news/news.component';
import { CoinlistComponent } from 'src/app/pages/home/coinlist/coinlist.component';
import { CoinwatchComponent } from 'src/app/pages/home/coinwatch/coinwatch.component';
 

@NgModule({
  declarations: [LayoutHomeComponent, HomeComponent,NewsComponent, CoinlistComponent, CoinwatchComponent],
  imports: [
    CommonModule, SharedModule, RouterModule, FlexLayoutModule
  ]
})
export class LayoutHomeModule { }
