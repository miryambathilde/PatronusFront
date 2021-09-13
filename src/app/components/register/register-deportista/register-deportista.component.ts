import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-register-deportista',
  templateUrl: './register-deportista.component.html',
  styleUrls: ['./register-deportista.component.css']
})
export class RegisterDeportistaComponent implements OnInit {
  registerDeportistas: FormGroup;
  constructor(
    private usersServices: UsersServicesService,
    private router: Router
  ) {

    this.registerDeportistas = new FormGroup({
      nombre: new FormControl('',[]),
      apellidos: new FormControl('',[]),
      edad: new FormControl('',[]),
      email: new FormControl('',[]),
      password: new FormControl('',[]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const mensaje = this.usersServices.register(this.registerDeportistas.value);
    if(mensaje !== "")
    {
      this.router.navigate(['/login']);
    }
  }
}
