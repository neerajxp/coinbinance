import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CardtopComponent } from './components/cardtop/cardtop.component';
import { AdvtopComponent } from './components/advtop/advtop.component';
import { AdvbottomComponent } from './components/advbottom/advbottom.component';
import { AdvleftComponent } from './components/advleft/advleft.component';
import { AdvrightComponent } from './components/advright/advright.component';
import { CoinlistComponent } from './components/coinlist/coinlist.component';
import { NewsComponent } from './components/news/news.component';
import { ApplinkComponent } from './components/applink/applink.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConbinanceAppComponent } from './conbinance-app.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';


const routes: Routes= 
[
  {
    path:'',component:ConbinanceAppComponent,
    children:[
              { path:':id', component:TopmenuComponent },
              { path:'',component:TopmenuComponent }
            ]
  },
  { 
    path:'', redirectTo:''
  }
];


@NgModule({
  declarations: [ToolbarComponent, TopmenuComponent, SidemenuComponent, NotificationComponent, CardtopComponent, AdvtopComponent, AdvbottomComponent, AdvleftComponent, AdvrightComponent, CoinlistComponent, NewsComponent, ApplinkComponent, SidebarComponent, SidenavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoinbinanceModule { }
