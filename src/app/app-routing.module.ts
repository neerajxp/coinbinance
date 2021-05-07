import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutSideComponent } from './layouts/layout-side/layout-side.component';
import { RowExampleComponent } from './pages/row-example/row-example.component';
import { ColExampleComponent } from './pages/col-example/col-example.component';
import { LayoutToolsComponent } from './layouts/layout-tools/layout-tools.component';
import { SidemenuComponent } from 'old_backup/src/app/coinbinance/components/sidemenu/sidemenu.component';
import { RatesComponent } from './pages/tools/rates/rates.component';

const routes: Routes = [
  {    
    path: '',
    component: LayoutFullComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutSideComponent,
    children: [
      {
        path: 'row-examples',
        component: RowExampleComponent,
      },
      {
        path: 'col-examples',
        component: ColExampleComponent,
      },
    ],
  },  
  {    
    path: '',
    component: LayoutToolsComponent,
    children: [
      {
        path: 'tools-link',
        component: SidemenuComponent,
      },
      {
        path: 'rates-link',
        component: RatesComponent,
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
