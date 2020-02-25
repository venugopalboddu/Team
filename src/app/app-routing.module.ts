import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { TeamleadComponent } from './teamlead/teamlead.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegComponent } from './reg/reg.component';


const routes: Routes = [
  {path: '', component: TeamComponent},
  {path: 'home', component: TeamComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'teamlead', component: TeamleadComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'reg', component: RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
