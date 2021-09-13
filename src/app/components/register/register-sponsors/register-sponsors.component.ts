import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-register-sponsors',
  templateUrl: './register-sponsors.component.html',
  styleUrls: ['./register-sponsors.component.css']
})
export class RegisterSponsorsComponent implements OnInit {
  registerSponsor: FormGroup;
  condiciones: boolean = false;

  constructor(private usersServices: UsersServicesService, private router: Router) {
    this.registerSponsor = new FormGroup(
      {
        empresa: new FormControl('', [Validators.required]),
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
      this.registerSponsor.get(controlName)?.hasError(errorName) &&
      this.registerSponsor.get(controlName)?.touched
    ) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    const mensaje = this.usersServices.register(this.registerSponsor.value);
    if (mensaje !== '') {
      this.router.navigate(['/login']);
    }
  }
}
