import { Component, OnInit } from '@angular/core';
import { myAthlete } from 'src/app/interfaces/myAthlete.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-offers-made',
  templateUrl: './offers-made.component.html',
  styleUrls: ['./offers-made.component.css']
})
export class OffersMadeComponent implements OnInit {

  myOffersMade: myAthlete[] | undefined;

  constructor(private sponsorsService: SponsorsService) { }

  async ngOnInit() {
    this.myOffersMade = await this.sponsorsService.getAllOffersMade();
    console.log(this.myOffersMade);
  }

}
