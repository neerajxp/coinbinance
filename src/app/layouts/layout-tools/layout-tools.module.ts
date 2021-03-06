import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module'; 
import { LayoutToolsComponent } from './layout-tools.component';
 
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidemenuComponent } from 'src/app/pages/tools/sidemenu/sidemenu.component'; 
import {RatesComponent} from 'src/app/pages/tools/rates/rates.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [LayoutToolsComponent, SidemenuComponent, RatesComponent],
  imports: [
    CommonModule, SharedModule, RouterModule, FlexLayoutModule,MaterialModule, BrowserAnimationsModule
  ]
})
export class LayoutToolsModule { }
