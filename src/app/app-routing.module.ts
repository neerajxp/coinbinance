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
import { PortfoliototalComponent } from './pages/tools/portfoliototal/portfoliototal.component';
import { LayoutLearnComponent } from './layouts/layout-learn/layout-learn.component';
import { BlogComponent } from './pages/learn/blog/blog.component';
import { HowtoComponent } from './pages/learn/howto/howto.component';
import { LayoutKinuComponent } from './layouts/layout-kinu/layout-kinu.component';
import { ACryptoForHereComponent } from './pages/kinu/blog/a-crypto-for-here/a-crypto-for-here.component';


const routes: Routes = [
   { path: '', component: LayoutHomeComponent},
   { path: 'tools', component: LayoutToolsComponent, children:[{path:'maxrates', component:RatesComponent },{path:'portfoliototal', component:PortfoliototalComponent }]},
 
   { path: 'kinu', component: LayoutLearnComponent, children:[{path:'blog', component:BlogComponent}
    , {path:'blog/cryptocurrency-for-here-or-to-go', component:ACryptoForHereComponent}]},

  //  { path: 'kinu/blog/forhere', component: ACryptoForHereComponent},
   
  //  { path: 'kinu/blog', component: ACryptoForHereComponent},
  
  //   path: 'kinu',
  //   component: LayoutKinuComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: BlogComponent,
  //     },
  //     {
  //       path: 'blog',
  //       component: BlogComponent,
  //     },    
  //     {
  //       path: 'howto',
  //       component: HowtoComponent,
  //     },      
  //   ],
  // },

  // {    
  //   path: '',
  //   component: LayoutHomeComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       component: HomeComponent,
  //     },
  //     {
  //       path: 'rates',
  //       component: RatesComponent,
  //     },
  //     {
  //       path: 'menu2',
  //       component: Menu2Component,
  //     },
  //   ],
  // },
  // {    
  //   path: '',
  //   component: LayoutToolsComponent,
  //   children: [
  //     {
  //       path: 'tools',
  //       component: SidemenuComponent,
  //     },
  //     {
  //       path: 'maxrates',
  //       component: RatesComponent,
  //     },
  //     {
  //       path: 'portfoliototal',
  //       component: PortfoliototalComponent,
  //     },
  //   ],
  // },
  // {    
  //   path: '',
  //   component: LayoutTradingComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent,
  //     },
  //     {
  //       path: 'rates',
  //       component: RatesComponent,
  //     },
  //     {
  //       path: 'menu2',
  //       component: Menu2Component,
  //     },
  //   ],
  // },
  // {    
  //   path: 'learn',
  //   component: LayoutLearnComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: BlogComponent,
  //     },
  //     {
  //       path: 'blog',
  //       component: BlogComponent,
  //     },    
  //     {
  //       path: 'howto',
  //       component: HowtoComponent,
  //     },      
  //   ],
  // },
  // {    
  //   path: 'kinu',
  //   component: LayoutKinuComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: BlogComponent,
  //     },
  //     {
  //       path: 'blog',
  //       component: BlogComponent,
  //     },    
  //     {
  //       path: 'howto',
  //       component: HowtoComponent,
  //     },      
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
