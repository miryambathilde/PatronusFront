import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/interfaces/new.interface';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: New[] = [];
  urlBack: string = "http://localhost:3000/";
  islooged: boolean = false;
  isAthlete: boolean = false;

  constructor(private usersService: UsersServicesService) { }

  async ngOnInit() {
    this.news = await this.usersService.getNews();
    console.log(this.news);

  }

  ngDoCheck() {
    const token = localStorage.getItem('token');
    this.islooged = (token !== null) ? true : false;
    const role = localStorage.getItem('role');
    this.isAthlete = (role !== 'A') ? true : false;
  }

}
