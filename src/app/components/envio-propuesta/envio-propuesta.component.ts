import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sponsor } from 'src/app/interfaces/sponsor.interface';
import { SponsorsService } from 'src/app/services/sponsors.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-envio-propuesta',
  templateUrl: './envio-propuesta.component.html',
  styleUrls: ['./envio-propuesta.component.css']
})
export class EnvioPropuestaComponent implements OnInit {


  sponsor: Sponsor | undefined;
  sponsorName: any;

  constructor(
    private sponsorsService: SponsorsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  async ngOnInit() {
    this.sponsor = await this.sponsorsService.getSponsor();
    this.sponsorName = this.sponsor?.company;
  }

  async onSubmit(pForm: any) {
    this.activatedRoute.params.subscribe(async params => {
      const fk_athletes = Number(params.idDeportista);
      const pFormItems = {
        company: pForm.value.company,
        participations: pForm.value.participations,
        fk_athletes: fk_athletes
      }
      const result = await this.sponsorsService.newOffer(pFormItems);
      console.log(result);
      setTimeout(() => {
        this.router.navigate(['/offers-made']);
      }, 1200);
    });
  }


  confirmOffer() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Oferta enviada!',
      showConfirmButton: false,
      timer: 1500
    });
  }


};
