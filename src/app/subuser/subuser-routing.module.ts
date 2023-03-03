import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubuserdashboardComponent } from './subuserdashboard/subuserdashboard.component';
import { Subuser2dashboardComponent } from './subuser2dashboard/subuser2dashboard.component';

const routes: Routes = [
  {path:'subuser/subuserdashboard', component:SubuserdashboardComponent},
  {path:'subuser/subuser2dashboard',component:Subuser2dashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubuserRoutingModule { }
