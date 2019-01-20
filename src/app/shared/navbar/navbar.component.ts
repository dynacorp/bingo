import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  menu() {
    // var elem = document.getElementsByTagName('body');
    // elem.classList.toggle('open');
    $('body').toggleClass('open');
  }

}
