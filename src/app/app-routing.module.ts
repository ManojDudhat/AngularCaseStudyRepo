import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AughGuardServiceService } from './augh-guard-service.service';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { WelcomecomponentComponent } from './welcomecomponent/welcomecomponent.component';

const routes: Routes = [
  {path:"",
  component: LoginComponentComponent
 },
 {path:"welcome",
  component: WelcomecomponentComponent
 },
 {path:"employee",
  component: EmployeeComponentComponent,
  canActivate: [AughGuardServiceService]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
