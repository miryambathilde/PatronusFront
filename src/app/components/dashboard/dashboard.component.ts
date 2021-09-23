import { Component, OnInit } from '@angular/core';
import { myAthlete } from "src/app/interfaces/myAthlete.interface";
import { SponsorsService } from "src/app/services/sponsors.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  favorites: myAthlete[] | undefined;

  constructor(private sponsorsService: SponsorsService) {}

  async ngOnInit() {
    this.favorites = await this.sponsorsService.getMyAthletesFavorites();
    console.log(this.favorites);
  }
}
