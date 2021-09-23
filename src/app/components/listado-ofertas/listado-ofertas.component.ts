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

  constructor(
    private athletesService: AthletesService,
    private router: Router) { }

  async ngOnInit() {
    this.offers = await this.athletesService.offers();
    console.log(this.offers);
  }

  async onAccept(idOffer: any) {
    const result = await this.athletesService.acceptOffer(idOffer);
    console.log(result);
    if(result.affectedRows) {
      this.router.navigate(['/offers']);
    }
  }

  async onReject(idOffer: any) {
    const result = await this.athletesService.rejectOffer(idOffer);
    console.log(result);
    if(result.affectedRows) {
      this.router.navigate(['/offers']);
    }
  }

  confirmAccept() {
    Swal.fire({
      title: '¿Estás seguro de aceptar la oferta?',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('¡Oferta aceptada con éxito!', '', 'success')
        // aquí borrar
      } else if (result.isDenied) {
        Swal.fire('Oferta no enviada', '', 'info')
      }
    });
  }

  confirmReject() {
    Swal.fire({
      title: '¿Estás seguro de rechazar la oferta?',
      showDenyButton: true,
      confirmButtonText: 'Rechazar',
      denyButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Rechazada', '', 'success')
        // aquí borrar
      } else if (result.isDenied) {
        Swal.fire('Cancelado', '', 'info')
      }
    });
  }

}
