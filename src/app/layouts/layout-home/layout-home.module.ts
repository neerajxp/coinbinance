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
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AnnouncementComponent } from 'src/app/pages/home/announcement/announcement.component';
 

@NgModule({
  declarations: [LayoutHomeComponent, HomeComponent,NewsComponent, CoinlistComponent, CoinwatchComponent, AnnouncementComponent],
  imports: [
    CommonModule, SharedModule, RouterModule, FlexLayoutModule, MaterialModule
  ]
})
export class LayoutHomeModule { }
