import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  apiURL = "assets/employees.json";

  constructor(private http: HttpClient) { }

  retrieveEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURL);
  }
}
