import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  resetPassword: FormGroup;

  constructor(
    private usersService: UsersServicesService,
    private router: Router
  ) { 
    this.resetPassword = new FormGroup(
      {
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

  ngOnInit(): void {
  }

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
      this.resetPassword.get(controlName)?.hasError(errorName) &&
      this.resetPassword.get(controlName)?.touched
    ) {
      return true;
    } else {
      return false;
    }
  }

  async onSubmit() {
    const mensaje = await this.usersService.resetPass(this.resetPassword.value);
    if(mensaje.affectedRows) {
      this.router.navigate(['/login']);
    }
  }


}
