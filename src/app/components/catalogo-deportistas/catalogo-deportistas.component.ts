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
    this.countries = await this.sponsorsService.getCountries();
    this.sports = await this.sponsorsService.getSports();
    this.deportistas = await this.sponsorsService.getAllAthletes();
    console.log(this.deportistas);
  }


  async recogerPais($event: any) {
    if ($event.target.value === 'todos') {
      this.deportistas = await this.sponsorsService.getAllAthletes();

    } else {
      this.deportistas = await this.sponsorsService.getAthleteByCountry($event.target.value);
      console.log(this.deportistas);
    }
  }

  async recogerDeporte($event: any) {
    if ($event.target.value === 'todos') {
      this.deportistas = await this.sponsorsService.getAllAthletes();
      console.log(this.deportistas);
    } else {
      this.deportistas = await this.sponsorsService.getAthleteBySport($event.target.value);
      console.log($event.target.value)
      console.log(this.deportistas);
    }
  }


  async recogerInvertible($event: any) {
    if ($event.target.value === 'invertibles') {
      this.deportistas = await this.sponsorsService.getAthletesInvertibles();
      console.log(this.deportistas);
    } else if ($event.target.value === 'noinvertibles') {
      this.deportistas = await this.sponsorsService.getAthletesNoInvertibles();
      console.log(this.deportistas);
    }
  }

  async ordenar($event: any) {
    if ($event.target.value === 'todos') {
      this.deportistas = await this.sponsorsService.getAllAthletes();
      console.log(this.deportistas);
    } else if ($event.target.value === 'percentage') {
      this.deportistas = await this.sponsorsService.getAthletesByPercentage();
      console.log(this.deportistas);
    } else if ($event.target.value === 'limitdate') {
      this.deportistas = await this.sponsorsService.getAthletesByLimitDate();
      console.log(this.deportistas);
    }
  }


  // //EVENTO DEL OUTPUT //
  onFiltroPais($event: any) {
    console.log($event);
  }
  onFiltroDeporte($event: any) {
    console.log($event);
  }
  onFiltroInvertible($event: any) {
    console.log($event);
  }

}



