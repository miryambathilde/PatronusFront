import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deportista } from 'src/app/interfaces/deportista.interface';
import { AthletesService } from 'src/app/services/athletes.service';
import { SponsorsService } from 'src/app/services/sponsors.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile-athlete',
  templateUrl: './edit-profile-athlete.component.html',
  styleUrls: ['./edit-profile-athlete.component.css']
})
export class EditProfileAthleteComponent implements OnInit {
  files: any;
  deportista: any = {};
  emailAthlete: any = [];
  email: any = {};
  urlBack: string = 'http://localhost:3000/';

  constructor(
    private athletesService: AthletesService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.deportista = await this.athletesService.getAthleteById();
    console.log(this.deportista);
    this.emailAthlete = await this.athletesService.getEmail();
    this.email = this.emailAthlete[0];
    console.log(this.email);
  }

  recogerImagen($event: any) {
    this.files = $event.target.files;
    console.log(this.files);
  }

  async onSubmit(pForm: any) {
    let formulario = new FormData();
    if (this.files !== undefined) {
      formulario.append('photo', this.files[0]);
    } else {
      formulario.append('photo', this.deportista.photo);
    }
    formulario.append('name', pForm.value.name);
    formulario.append('surname', pForm.value.surname);
    formulario.append('age', pForm.value.age);
    formulario.append('country', pForm.value.country);
    formulario.append('email', pForm.value.email);
    formulario.append('sport', pForm.value.sport);
    formulario.append('limitdate', pForm.value.limitdate);
    const result = await this.athletesService.editAthlete(formulario);
    console.log(result);
  }

  deleteConfirm() {
    Swal.fire({
      title: '¿Estás seguro de borrar tu cuenta?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar'
    }).then(async result => {
      if (result.isConfirmed) {
        Swal.fire('Cuenta eliminada', '', 'success');
        const result = await this.athletesService.deleteAccount();
        localStorage.removeItem('token');
        setTimeout(() => {
          if (result.affectedRows) {
            this.router.navigate(['/home']);
          }
        }, 500);
      } else if (result.isDenied) {
        Swal.fire('No se ha podido eliminar la cuenta', '', 'info');
      }
    });
  }

  confirmUpdate() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El perfil se ha actualizado',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
