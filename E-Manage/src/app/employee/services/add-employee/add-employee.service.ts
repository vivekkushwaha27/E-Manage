import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  employees:any = [
    {name:'Vivek',email:'vivek@gmail.com',dob:new Date(2003,6,27),photo:null}
  ];

  showEmployees(){
    console.log(this.employees);
  }
}
