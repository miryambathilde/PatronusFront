import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islooged: boolean = false;
  ruta: boolean = false;
  ruta2: boolean = false;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        this.ruta = (event.url === '/home') ? true : false;
      }
    });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        this.ruta2 = (event.url === '/register') ? true : false;
      }
    });

  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    const token = localStorage.getItem('token');
    this.islooged = (token !== null) ? true : false;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }


}
