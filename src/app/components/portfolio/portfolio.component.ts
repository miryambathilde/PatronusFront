import { Component, OnInit } from '@angular/core';
import { myAthlete } from 'src/app/interfaces/myAthlete.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  myAthletes: myAthlete[] = [];

  constructor(private sponsorsService: SponsorsService) { }

  async ngOnInit(){
    this.myAthletes = await this.sponsorsService.getMyAthletes();
    console.log(this.myAthletes);
  }

}
