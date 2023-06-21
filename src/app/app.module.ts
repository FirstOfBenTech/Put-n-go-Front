import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { ClientComponent } from './admin/component/client/client.component';
import { StockComponent } from './admin/component/stock/stock.component';
import { BoutiqueComponent } from './admin/component/boutique/boutique.component';
import { MesboutiquesComponent } from './admin/component/mesboutiques/mesboutiques.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateClientComponent } from './admin/component/update-client/update-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ItemBoutiqueComponent } from './admin/component/item-boutique/item-boutique.component';
import { CommandeEnCoursComponent } from './admin/component/commande-en-cours/commande-en-cours.component';
import { CommandeTermineComponent } from './admin/component/commande-termine/commande-termine.component';
import { ComptabiliteComponent } from './admin/component/comptabilite/comptabilite.component';
import { FacturationComponent } from './admin/component/facturation/facturation.component';
import { CaisseComponent } from './admin/component/caisse/caisse.component';
import { ComptabilitegeneraleComponent } from './admin/component/comptabilitegenerale/comptabilitegenerale.component';
import { SalaireComponent } from './admin/component/salaire/salaire.component';
import { AutrefactureComponent } from './admin/component/autrefacture/autrefacture.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent,
    StockComponent,
    BoutiqueComponent,
    MesboutiquesComponent,
    UpdateClientComponent,
    ItemBoutiqueComponent,
    CommandeEnCoursComponent,
    CommandeTermineComponent,
    ComptabiliteComponent,
    FacturationComponent,
    CaisseComponent,
    ComptabilitegeneraleComponent,
    SalaireComponent,
    AutrefactureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
