import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/component/dashboard/dashboard.component';
import { UserComponent } from './admin/component/user/user.component';
import { CoutureComponent } from './admin/component/couture/couture.component';
import { SettingComponent } from './admin/component/setting/setting.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'user',component:UserComponent
  },
  {
    path:'couture',component:CoutureComponent
  },
  {
    path:'setting',component:SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
