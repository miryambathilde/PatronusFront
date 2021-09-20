import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isSponsor: boolean = false;
  isAthlete: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    if(localStorage.getItem('role') === 'S'){
      this.isSponsor = true;
    }
    if(localStorage.getItem('role') === "A") {
      this.isAthlete = true;
    }
  }

}
