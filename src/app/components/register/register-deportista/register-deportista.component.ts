import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-register-deportista',
  templateUrl: './register-deportista.component.html',
  styleUrls: ['./register-deportista.component.css']
})
export class RegisterDeportistaComponent implements OnInit {
  registerDeportistas: FormGroup;
  condiciones: boolean = false;

  constructor(
    private usersServices: UsersServicesService,
    private router: Router
  ) {
    this.registerDeportistas = new FormGroup(
      {
        nombre: new FormControl('', [Validators.required]),
        apellidos: new FormControl('', [Validators.required]),
        edad: new FormControl('', [Validators.required]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ]),
        repite_password: new FormControl('', []),
        condiciones: new FormControl('', [Validators.required])
      },
      [this.validadorPassword]
    );
  }

  ngOnInit(): void {}

  validadorPassword(form: AbstractControl) {
    const valorPassword = form.get('password')?.value;
    const repitePassword = form.get('repite_password')?.value;
    if (valorPassword === repitePassword) {
      return null;
    } else {
      return { validadorPassword: true };
    }
  }

  checkControl(controlName: string, errorName: string): boolean {
    if (
      this.registerDeportistas.get(controlName)?.hasError(errorName) &&
      this.registerDeportistas.get(controlName)?.touched
    ) {
      return true;
    } else {
      return false;
    }
  }

  async onSubmit() {
    const athlete = await this.usersServices.registerAthlete(this.registerDeportistas.value);
    console.log(athlete);
    this.router.navigate(['/tokens-register', athlete]);
  
  }
}
