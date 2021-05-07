import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTradingComponent } from './layout-trading.component';
import { SharedModule } from 'src/app/shared/shared.module'; 
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { DashboardComponent } from 'src/app/pages/trading/dashboard/dashboard.component';


@NgModule({
  declarations: [LayoutTradingComponent, DashboardComponent],
  imports: [
    CommonModule,SharedModule, RouterModule, FlexLayoutModule
  ]
})
export class LayoutTradingModule { }
