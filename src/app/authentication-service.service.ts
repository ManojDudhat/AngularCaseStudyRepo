import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }

  authenticateUser (user : string, password: string) : boolean{
    if((user === 'fis' || user === 'admin') && password === 'fis123'){
      if(user === 'fis') {
        localStorage.setItem('EmployeeTabAccess', 'false');
      } else {
        localStorage.setItem('EmployeeTabAccess', 'true');
      }
      localStorage.setItem('UserLoggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }
}
