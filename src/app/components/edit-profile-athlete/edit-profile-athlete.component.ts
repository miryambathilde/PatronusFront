import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deportista } from 'src/app/interfaces/deportista.interface';
import { AthletesService } from 'src/app/services/athletes.service';
import { SponsorsService } from 'src/app/services/sponsors.service';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile-athlete',
  templateUrl: './edit-profile-athlete.component.html',
  styleUrls: ['./edit-profile-athlete.component.css']
})
export class EditProfileAthleteComponent implements OnInit {
  files: any;
  sport: any;
  deportista: any = {};
  emailAthlete: any = [];
  email: any = {};
  urlBack: string = 'http://localhost:3000/';

  constructor(
    private athletesService: AthletesService,
    private usersService: UsersServicesService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.deportista = await this.athletesService.getAthleteById();
    console.log(this.deportista);
    this.emailAthlete = await this.athletesService.getEmail();
    this.email = this.emailAthlete[0];
    console.log('esto es el mail', this.email);
  }

  recogerImagen($event: any) {
    this.files = $event.target.files;
    console.log(this.files);
  }

  elegirDeporte($event: any) {
    this.sport = $event.target.value;
  }

  async onSubmit(pForm: any) {
    let formulario = new FormData();
    if (this.files !== undefined) {
      formulario.append('photo', this.files[0]);
    } else {
      formulario.append('photo', this.deportista.photo);
    }
    if (this.sport !== undefined) {
      formulario.append('sport', this.sport);
    } else {
      formulario.append('sport', this.deportista.sport);
    }
    formulario.append('name', pForm.value.name);
    formulario.append('surname', pForm.value.surname);
    formulario.append('age', pForm.value.age);
    formulario.append('country', pForm.value.country);
    formulario.append('userinstagram', pForm.value.userinstagram);
    formulario.append('usertiktok', pForm.value.usertiktok);
    formulario.append('email', pForm.value.email);
    const result = await this.athletesService.editAthlete(formulario);
    console.log(result);
    window.location.reload();
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
        const result = await this.usersService.deleteAccount();
        localStorage.removeItem('token');
        setTimeout(() => {
          if (result.affectedRows) {
            this.router.navigate(['/home']);
          }
        }, 500);
      } else if (result.isDenied) {
        Swal.fire('Cuenta no eliminada', '', 'info');
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
