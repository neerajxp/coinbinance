import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'old_backup/src/app/shared/material.module'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, MaterialModule, HttpClientModule],
  exports: [FooterComponent, HeaderComponent, SidebarComponent],
})
export class SharedModule {}
