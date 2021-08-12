import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AddTrainAdmComponent } from './add-train-adm/add-train-adm.component';
import { ListTrainComponent } from './list-train/list-train.component';
import { BookingComponent } from './booking/booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListTrainAdmComponent } from './list-train-adm/list-train-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    IndexComponent,
    RegisterComponent,
    AddTrainAdmComponent,
    ListTrainComponent,
    BookingComponent,
    BookingListComponent,
    AboutusComponent,
    ListTrainAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
