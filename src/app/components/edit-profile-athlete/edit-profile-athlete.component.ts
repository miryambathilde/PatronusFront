import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthletesService } from 'src/app/services/athletes.service';

@Component({
  selector: 'app-edit-profile-athlete',
  templateUrl: './edit-profile-athlete.component.html',
  styleUrls: ['./edit-profile-athlete.component.css']
})
export class EditProfileAthleteComponent implements OnInit {

  files: any;

  constructor(private athletesService: AthletesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  recogerImagen($event: any) {
    this.files = $event.target.files
    console.log(this.files);
  }

  async onSubmit(pForm: any) {
    let formulario = new FormData();
    formulario.append('photo', this.files[0]);
    formulario.append('name', pForm.value.name);
    formulario.append('surname', pForm.value.surname);
    formulario.append('age', pForm.value.age);
    formulario.append('country', pForm.value.country);
    formulario.append('email', pForm.value.email);
    formulario.append('sport', pForm.value.sport);
    const result = await this.athletesService.editAthlete(formulario);
    console.log(result);
  }

  async onDelete() {
    // const result = await this.athletesService.deleteAccount();
    // if(result.affectedRows) {
    //   this.router.navigate(['/home']);
    // }
  }

}
