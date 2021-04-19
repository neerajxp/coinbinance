import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=
[
  {path:'coinbinance', loadChildren:()=> import('./coinbinance/coinbinance.module').then(m=>m.CoinbinanceModule)},  
  // {path:'**', redirectTo:'coinbinance'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
