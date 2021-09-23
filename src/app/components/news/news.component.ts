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

  constructor(private usersService: UsersServicesService) { }

  async ngOnInit() {
    this.news = await this.usersService.getNews();
    console.log(this.news);
  }

}
