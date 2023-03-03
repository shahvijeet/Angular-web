import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UsersessionComponent } from './usersession/usersession.component';

const routes: Routes = [
  
    {path:'admin/dashboard', component:DashboardComponent},
    {path:'admin/user', component:UserComponent},
    {path:'admin/usersession', component:UsersessionComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
