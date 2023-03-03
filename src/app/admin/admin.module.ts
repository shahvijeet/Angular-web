import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UsersessionComponent } from './usersession/usersession.component';
import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from '../app.component';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [
    // AppComponent,
    DashboardComponent,
    UserComponent,
    UsersessionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule


  ],providers: [],
  bootstrap: []
})
export class AdminModule { }
