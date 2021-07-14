import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  username : string;
  password : string;


  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationServiceService) { }

  ngOnInit() {

  }

  submit(){
    /*if(this.username == "FIS" && this.password == "fis123"){

      this.router.navigate(['/welcome']);
    }else{
      alert("invalid");
    }*/

    if(this.authenticationService.authenticateUser(this.username, this.password)){
      this.router.navigate(['/welcome']);
    }else{
      alert("Invalid Credentials");
    }
  }
}
