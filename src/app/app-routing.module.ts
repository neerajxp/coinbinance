import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutSideComponent } from './layouts/layout-side/layout-side.component';
import { RowExampleComponent } from './pages/row-example/row-example.component';
import { ColExampleComponent } from './pages/col-example/col-example.component';
import { LayoutToolsComponent } from './layouts/layout-tools/layout-tools.component';
import { SidemenuComponent } from './pages/tools/sidemenu/sidemenu.component';
import { RatesComponent } from './pages/tools/rates/rates.component';
import { Menu2Component } from './pages/tools/menu2/menu2.component';
import { LayoutTradingComponent } from './layouts/layout-trading/layout-trading.component';
import { LayoutHomeComponent } from './layouts/layout-home/layout-home.component';
import { DashboardComponent } from './pages/trading/dashboard/dashboard.component';
import { CoinlistComponent } from './pages/home/coinlist/coinlist.component'


const routes: Routes = [
  // {    
  //   path: '',
  //   component: LayoutFullComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: HomeComponent,
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   component: LayoutSideComponent,
  //   children: [
  //     {
  //       path: 'row-examples',
  //       component: RowExampleComponent,
  //     },
  //     {
  //       path: 'col-examples',
  //       component: ColExampleComponent,
  //     },
  //   ],
  // },  
    
  {    
    path: '',
    component: LayoutHomeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'rates',
        component: RatesComponent,
      },
      {
        path: 'menu2',
        component: Menu2Component,
      },
    ],
  },
  {    
    path: '',
    component: LayoutToolsComponent,
    children: [
      {
        path: 'tools',
        component: SidemenuComponent,
      },
      {
        path: 'rates',
        component: RatesComponent,
      },
      {
        path: 'menu2',
        component: Menu2Component,
      },
    ],
  },
  {    
    path: '',
    component: LayoutTradingComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'rates',
        component: RatesComponent,
      },
      {
        path: 'menu2',
        component: Menu2Component,
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
