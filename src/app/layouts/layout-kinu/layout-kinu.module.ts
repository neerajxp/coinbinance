import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutKinuComponent } from './layout-kinu.component'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogComponent } from 'src/app/pages/learn/blog/blog.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/modules/material.module'

@NgModule({
  declarations: [LayoutKinuComponent,BlogComponent],
  imports: [
    CommonModule, SharedModule,RouterModule,FlexLayoutModule,MaterialModule
  ]
})
export class LayoutKinuModule { }
