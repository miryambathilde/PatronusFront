import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersServices: UsersServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    const result = await this.usersServices.login(pForm.value);
    if(result.token) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('role', result.role);
      localStorage.setItem('id', result.userId);
      if(result.role === 'S') {
        this.router.navigate(['/dashboard']);
      } else if (result.role === 'A') {
        this.router.navigate(['/offers']);
      }
    } else {
      alert('Usuario o contraseña incorrectos. Por favor, revise los datos');
    }

  }

}
