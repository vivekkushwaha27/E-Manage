import { Component, inject } from '@angular/core';
import { AddEmployeeService } from '../../services/add-employee/add-employee.service';

@Component({
  selector: 'app-show-employees',
  standalone: false,
  templateUrl: './show-employees.component.html',
  styleUrl: './show-employees.component.css'
})
export class ShowEmployeesComponent {

  private _servie = inject(AddEmployeeService);
  columnsToDisplay = ['id', 'name', 'email', 'dob', 'photo'];
  employees = this._servie.employees;

  isFile(photo: any): boolean {
    return photo instanceof File;
  }

  getImageUrl(photo: File | null): string | null {
    return photo ? URL.createObjectURL(photo) : null;
  }
}
