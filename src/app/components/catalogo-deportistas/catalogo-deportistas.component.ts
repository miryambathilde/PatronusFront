import { Component, OnInit } from '@angular/core';
import { Deportista } from "src/app/interfaces/deportista.interface";
import { AthletesService } from 'src/app/services/athletes.service';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-catalogo-deportistas',
  templateUrl: './catalogo-deportistas.component.html',
  styleUrls: ['./catalogo-deportistas.component.css']
})
export class CatalogoDeportistasComponent implements OnInit {

  deportistas: Deportista[] | undefined;

  constructor(
    private athletesService: AthletesService,
    private sponsorsService: SponsorsService) {}

  async ngOnInit() {
    this.deportistas = await this.sponsorsService.getAllAthletes();
    console.log(this.deportistas);
  }

  //EVENTO DEL OUTPUT //
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
