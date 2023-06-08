import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './admin/component/header/header.component';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { UserComponent } from './admin/component/user/user.component';
import { SettingComponent } from './admin/component/setting/setting.component';
import { CoutureComponent } from './admin/component/couture/couture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UserComponent,
    SettingComponent,
    CoutureComponent
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
