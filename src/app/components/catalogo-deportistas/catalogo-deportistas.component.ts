import { Component, OnInit } from '@angular/core';
import { Deportista } from "src/app/interfaces/deportista.interface";
import { myAthlete } from 'src/app/interfaces/myAthlete.interface';
import { AthletesService } from 'src/app/services/athletes.service';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-catalogo-deportistas',
  templateUrl: './catalogo-deportistas.component.html',
  styleUrls: ['./catalogo-deportistas.component.css']
})
export class CatalogoDeportistasComponent implements OnInit {

  deportistas: Deportista[] | undefined;

  urlBack: string = "http://localhost:3000/";

  countries: any[] = [];
  sports: any[] = [];

  constructor(
    private athletesService: AthletesService,
    private sponsorsService: SponsorsService) { }

  async ngOnInit() {
    // this.countries = await this.sponsorsService.getCountries();
    // this.sports = await this.sponsorsService.getSports();
    this.deportistas = await this.sponsorsService.getAllAthletes();
    // console.log(this.deportistas);
  }


  async recogerPais($event: any) {
    if ($event === 'todos') {
      this.deportistas = await this.sponsorsService.getAllAthletes();

    } else {
      this.deportistas = await this.sponsorsService.getAthleteByCountry($event);
      console.log(this.deportistas);
    }
  }

  async recogerDeporte($event: any) {
    if ($event === 'todos') {
      this.deportistas = await this.sponsorsService.getAllAthletes();
      console.log(this.deportistas);
    } else {
      this.deportistas = await this.sponsorsService.getAthleteBySport($event);
      console.log(this.deportistas);
    }
  }


  async recogerInvertible($event: any) {
    if ($event === 'invertibles') {
      this.deportistas = await this.sponsorsService.getAthletesInvertibles();
      console.log(this.deportistas);
    } else if ($event === 'noinvertibles') {
      this.deportistas = await this.sponsorsService.getAthletesNoInvertibles();
      console.log(this.deportistas);
    }
  }

  async ordenar($event: any) {
    if ($event.target.value === 'todos') {
      this.deportistas = await this.sponsorsService.getAllAthletes();
      console.log('Estos son los deportistas', this.deportistas);
    } else if ($event.target.value === 'percentage') {
      this.deportistas = await this.sponsorsService.getAthletesByPercentage();
      console.log('Estos sib kis de portcetae', this.deportistas);
      console.log(this.deportistas);
    } else if ($event.target.value === 'limitdate') {
      this.deportistas = await this.sponsorsService.getAthletesByLimitDate();
      console.log('Estos son los de limit date', this.deportistas);
      console.log(this.deportistas);
    }
  }


}



