import { Component, OnInit } from '@angular/core';
import { Deportista } from 'src/app/interfaces/deportista.interface';
import { SponsorsService } from "src/app/services/sponsors.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  trends: Deportista[] | undefined;
  urlBack: string = 'http://localhost:3000/';
  unicTrends: any[] | undefined;

  constructor(private sponsorsService: SponsorsService) {}

  async ngOnInit() {
    this.trends = await this.sponsorsService.getTrendsAthletes();
    const eliminaAthletesDuplicados = (arr: any) => {
    const athletesUnic = arr.map((athlete: any) => {
      return [athlete.id, athlete]
    });
    return [...new Map(athletesUnic).values()];
  }
    this.unicTrends = eliminaAthletesDuplicados(this.trends);
    console.log(this.unicTrends);
  }
}

