import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddTrainAdmComponent } from './add-train-adm/add-train-adm.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingComponent } from './booking/booking.component';
import { IndexComponent } from './index/index.component';
import { ListTrainComponent } from './list-train/list-train.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'add-train-adm',component:AddTrainAdmComponent},
  {path:'list-train',component:ListTrainComponent},
  {path:'booking',component:BookingComponent},
  {path:'booking-list',component:BookingListComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'', redirectTo:'Home', pathMatch:'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
