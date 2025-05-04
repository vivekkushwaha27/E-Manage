import { Component,inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddEmployeeService } from '../../services/add-employee/add-employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  private _addEmployeeService = inject(AddEmployeeService);
  name = '';
  email = '';
  dob: Date | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addEmployee(form: any) {
    if (form.valid) {
      const employee = {
        name: this.name,
        email: this.email,
        dob: this.dob,
        photo: this.selectedFile
      };
      this._addEmployeeService.employees.push(employee);
      this._addEmployeeService.showEmployees();
      form.resetForm();
      this.imagePreview = null;
    }
  }
}
