import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutLearnComponent } from './layout-learn.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/modules/material.module';
 
@NgModule({
  declarations: [LayoutLearnComponent],
  imports: [CommonModule, SharedModule,RouterModule,FlexLayoutModule,MaterialModule]
})
export class LayoutLearnModule { }
