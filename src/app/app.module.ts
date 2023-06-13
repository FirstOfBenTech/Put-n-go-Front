import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './admin/component/header/header.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { ClientComponent } from './admin/component/client/client.component';
import { CommandeComponent } from './admin/component/commande/commande.component';
import { StockComponent } from './admin/component/stock/stock.component';
import { BoutiqueComponent } from './admin/component/boutique/boutique.component';
import { MesboutiquesComponent } from './admin/component/mesboutiques/mesboutiques.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ClientComponent,
    CommandeComponent,
    StockComponent,
    BoutiqueComponent,
    MesboutiquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
