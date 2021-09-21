import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { myAthlete } from 'src/app/interfaces/myAthlete.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  // @Output() filtroPais: EventEmitter<string> = new EventEmitter();
  // @Output() filtroDeporte: EventEmitter<string> = new EventEmitter();
  // @Output() filtroInvertible: EventEmitter<string> = new EventEmitter();

  countries: any[] = [];
  sports: any[] = [];
  athletesByCountry: myAthlete[] | undefined;
  athletesBySports: myAthlete[] | undefined;

  constructor( private sponsorsService: SponsorsService ) {}

  async ngOnInit() {
    this.countries = await this.sponsorsService.getCountries();
    console.log(this.countries);
    this.sports = await this.sponsorsService.getSports();
    console.log(this.sports);
  }

  async recogerPais($event: any) {
    this.athletesByCountry = await this.sponsorsService.getAthleteByCountry($event.target.value);
    console.log(this.athletesByCountry);
  }

  async recogerDeporte($event: any) {
    this.athletesBySports = await this.sponsorsService.getAthleteBySport($event.target.value);
    console.log($event.target.value)
    console.log(this.athletesBySports);
  }

  

  // //EMITIMOS LOS EVENTOS DE LOS OUTPUTS //
  // recogerPais($event: any) {
  //   this.filtroPais.emit($event.target.value);
  // }
  // recogerDeporte($event: any) {
  //   this.filtroDeporte.emit($event.target.value);
  // }
  // recogerInvertible($event: any) {
  //   this.filtroInvertible.emit($event.target.value);
  // }
}
