import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islooged: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    if(localStorage.getItem('token'))
    {
      this.islooged = true;

    }
  }


}
