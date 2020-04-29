import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1, "name": "a", "age": 11},
      {"id":2, "name": "b", "age": 12},
      {"id":3, "name": "c", "age": 13},
      {"id":4, "name": "d", "age": 14}
    ]; 
  }
}
