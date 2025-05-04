import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ShowEmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    
  ]
})
export class EmployeeModule { }
