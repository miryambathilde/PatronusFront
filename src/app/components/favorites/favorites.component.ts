import { Component, OnInit } from '@angular/core';
import { myAthlete } from 'src/app/interfaces/myAthlete.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: myAthlete[] = [];

  constructor(private sponsorsService: SponsorsService) { }

  async ngOnInit() {
    this.favorites = await this.sponsorsService.getMyAthletesFavorites();
    console.log(this.favorites);
  }

}
