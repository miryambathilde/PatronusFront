import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Deportista } from "src/app/interfaces/deportista.interface";
import { AthletesService } from "src/app/services/athletes.service";
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-card-deportista',
  templateUrl: './card-deportista.component.html',
  styleUrls: ['./card-deportista.component.css']
})
export class CardDeportistaComponent implements OnInit {

  miDeportista: Deportista | undefined;

  constructor(
     private AthletesService: AthletesService,
     private SponsorsService: SponsorsService,
     private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idDeportista);
      this.miDeportista = await this.SponsorsService.getAthleteById(id);
      console.log(this.miDeportista);
    })
  };

}
