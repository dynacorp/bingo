import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    $('body').addClass('bg-dark');
  }

  signin() {
    this.router.navigate(['/dashboard']);
  }

}
