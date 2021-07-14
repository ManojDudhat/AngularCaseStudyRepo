import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { WelcomecomponentComponent } from './welcomecomponent/welcomecomponent.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { AughGuardServiceService } from './augh-guard-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCustomInterceptorService } from './http-custom-interceptor.service';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    WelcomecomponentComponent,
    EmployeeComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AughGuardServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCustomInterceptorService,
      multi: true
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
