import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Deportista } from "src/app/interfaces/deportista.interface";
import { AthletesService } from "src/app/services/athletes.service";
import { SponsorsService } from 'src/app/services/sponsors.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-deportista',
  templateUrl: './card-deportista.component.html',
  styleUrls: ['./card-deportista.component.css']
})
export class CardDeportistaComponent implements OnInit {
  miDeportista: Deportista | undefined;
  athletesByToken: Deportista[] | undefined;
  athletesByResults: Deportista[] | undefined;
  athletesByCountry: Deportista[] | undefined;

  sponsors: any = [];

  isFavorite: boolean = false;

  areThereReccomendsToken: boolean = false;
  areThereReccomendsResults: boolean = false;
  areThereReccomendsCountry: boolean = false;


  urlBack: string = 'http://localhost:3000/';

  constructor(
    private athletesService: AthletesService,
    private sponsorsService: SponsorsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idDeportista);
      this.miDeportista = await this.sponsorsService.getAthleteById(id);
      console.log(this.miDeportista);
      this.athletesByToken = await this.sponsorsService.getRecomByToken(this.miDeportista?.quantitydemand, this.miDeportista?.id);
      console.log('Athlete by Token', this.athletesByToken);
      this.athletesByResults = await this.sponsorsService.getRecomByResults(this.miDeportista?.results, this.miDeportista?.id);
      console.log('Athlete by results', this.athletesByResults);
      const favorite = await this.sponsorsService.athleteIsFavorite(id);
      console.log('favorite', favorite[0])
      this.isFavorite = (favorite[0] !== undefined) ? true : false;
      this.sponsors = await this.sponsorsService.getSponsorsByAthlete(id);
      console.log(this.sponsors);
      this.athletesByCountry = await this.sponsorsService.getRecomByCountry(this.miDeportista?.country, this.miDeportista?.id);
      console.log('Athlete by Country', this.athletesByCountry);
      this.areThereReccomendsToken = (this.athletesByToken?.length === 0) ? true : false;
      this.areThereReccomendsResults = (this.athletesByResults?.length === 0) ? true : false;
      this.areThereReccomendsCountry = (this.athletesByCountry?.length === 0) ? true : false;
    });

  }


  addFavorite() {
    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idDeportista);
      const result = await this.sponsorsService.addAthleteFavorite(id);
      console.log('add athlete favorite', result);
      setTimeout(() => {
        this.router.navigate(['/favorites']);
      }, 1000);
    });
  }


  removeFavorite() {
    this.activatedRoute.params.subscribe(async params => {
      const id = parseInt(params.idDeportista);
      const result = await this.sponsorsService.removeAthleteFavorite(id);
      console.log('remove athlete favorite', result);
      setTimeout(() => {
        this.router.navigate(['/favorites']);
      }, 1000);
    });
  }


  confirmFavorite() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Añadido a tus favoritos!',
      showConfirmButton: false,
      timer: 1500
    });
  }
}

