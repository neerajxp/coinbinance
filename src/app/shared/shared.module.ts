import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { HeaderlearnComponent } from './components/headerlearn/headerlearn.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, HeaderlearnComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, MaterialModule, HttpClientModule],
  exports: [FooterComponent, HeaderComponent, SidebarComponent, HeaderlearnComponent],
})
export class SharedModule {}
