import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';

const routes: Routes = [
  {path:'add',component:AddEmployeeComponent},
  {path:'show',component:ShowEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
