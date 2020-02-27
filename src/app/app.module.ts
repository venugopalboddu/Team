import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegComponent } from './reg/reg.component';
import { ManagerComponent } from './manager/manager.component';
import { TeamleadComponent } from './teamlead/teamlead.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    AdminComponent,
    EmployeeComponent,
    RegComponent,
    ManagerComponent,
    TeamleadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
