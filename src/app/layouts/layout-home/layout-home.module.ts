import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';  
import { LayoutHomeComponent } from './layout-home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from 'src/app/pages/home/home.component';


@NgModule({
  declarations: [LayoutHomeComponent, HomeComponent],
  imports: [
    CommonModule, SharedModule, RouterModule, FlexLayoutModule
  ]
})
export class LayoutHomeModule { }
