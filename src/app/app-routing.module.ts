import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { BoutiqueComponent } from './admin/component/boutique/boutique.component';
import { ClientComponent } from './admin/component/client/client.component';
import { CommandeComponent } from './admin/component/commande/commande.component';
import { StockComponent } from './admin/component/stock/stock.component';
import { MesboutiquesComponent } from './admin/component/mesboutiques/mesboutiques.component';

const routes: Routes = [
  {
    path:'**',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'boutique',component:BoutiqueComponent
  },
  {
    path:'client',component:ClientComponent
  },
  {
    path:'commande',component:CommandeComponent
  },
  {
    path:'stock',component:StockComponent
  },
  {
    path:'mesboutiques',component:MesboutiquesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
