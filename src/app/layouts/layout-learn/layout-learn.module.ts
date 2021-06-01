import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutLearnComponent } from './layout-learn.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogComponent } from 'src/app/pages/learn/blog/blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutLearnComponent, BlogComponent],
  imports: [CommonModule, SharedModule,RouterModule]
})
export class LayoutLearnModule { }
