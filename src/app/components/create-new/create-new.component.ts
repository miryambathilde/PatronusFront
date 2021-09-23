import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthletesService } from 'src/app/services/athletes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  files: any;
  

  constructor(
    private athletesService: AthletesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  recogerImagen($event: any) {
    this.files = $event.target.files
    console.log(this.files);
  }

  async onSubmit(pForm: any) {
    let formulario = new FormData();
    formulario.append('photo', this.files[0]);
    formulario.append('summary', pForm.value.summary);
    formulario.append('username', pForm.value.username);
    formulario.append('date', pForm.value.date);
    console.log(pForm.value.date);
    const result = await this.athletesService.createNew(formulario);
    console.log(result);
    setTimeout(() => {
      if(result.affectedRows) {
        this.router.navigate(['/news']);
      }
    }, 1600);
  };

  alertConfirm() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu noticia se ha publicado',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
