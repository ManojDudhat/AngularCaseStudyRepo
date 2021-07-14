import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  title = 'Angular Case Study';
  showSignoutLink = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('UserLoggedIn') === 'true'){
      this.showSignoutLink = true;
    } else {
      this.showSignoutLink = false;
    }
  }

  signout(): void {
    localStorage.clear();
    this.router.navigate(['']);
    this.showSignoutLink = false;
  }

}
