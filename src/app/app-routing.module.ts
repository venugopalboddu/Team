import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegComponent } from './reg/reg.component';
import { SecuGuard } from './secu.guard';
import { ManagerComponent } from './manager/manager.component';
import { TeamleadComponent } from './teamlead/teamlead.component';

const routes: Routes = [
  {path: '', component: TeamComponent},
  {path: 'home', component: TeamComponent},
  {path: 'admin', component: AdminComponent, canActivate: [SecuGuard]},
  {path: 'manager', component: ManagerComponent, canActivate: [SecuGuard]},
  {path: 'teamlead', component: TeamleadComponent, canActivate: [SecuGuard]},
  {path: 'employee', component: EmployeeComponent, canActivate: [SecuGuard]},
  {path: 'reg', component: RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
