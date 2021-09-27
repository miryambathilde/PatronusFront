import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/interfaces/offer.interface';
import { AthletesService } from 'src/app/services/athletes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-ofertas',
  templateUrl: './listado-ofertas.component.html',
  styleUrls: ['./listado-ofertas.component.css']
})
export class ListadoOfertasComponent implements OnInit {
  offers: Offer[] | undefined;
  urlBack: string = 'http://localhost:3000/';

  constructor(
    private athletesService: AthletesService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.offers = await this.athletesService.offers();
    console.log(this.offers);
  }

  // async onAccept(idOffer: any) {
  //   const result = await this.athletesService.acceptOffer(idOffer);
  //   console.log(result);
  //   if (result.affectedRows) {
  //     window.location.reload();
  //   }
  // }

  // async onReject(idOffer: any) {
  //   const result = await this.athletesService.rejectOffer(idOffer);
  //   console.log(result);
  //   if (result.affectedRows) {
  //     window.location.reload();
  //   }
  // }

  confirmAccept(idOffer: any) {
    Swal.fire({
      title: '¿Estás seguro de aceptar la oferta?',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar'
    }).then(async result => {
      if (result.isConfirmed) {
        Swal.fire('¡Oferta aceptada!', '', 'success');
        const result = await this.athletesService.acceptOffer(idOffer);
        console.log(result);
        if (result.affectedRows) {
          window.location.reload();
        }
      } else if (result.isDenied) {
        Swal.fire('Oferta no enviada', '', 'info');
      }
    });
  }

  confirmReject(idOffer: any) {
    Swal.fire({
      title: '¿Estás seguro de rechazar la oferta?',
      showDenyButton: true,
      confirmButtonText: 'Rechazar',
      denyButtonText: 'Cancelar'
    }).then(async result => {
      if (result.isConfirmed) {
        Swal.fire('Rechazada', '', 'success');
        const result = await this.athletesService.rejectOffer(idOffer);
        console.log(result);
        if (result.affectedRows) {
          window.location.reload();
        }
      } else if (result.isDenied) {
        Swal.fire('Cancelado', '', 'info');
      }
    });
  }
}
