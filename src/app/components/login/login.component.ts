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

  onSubmit(pForm:any){
    const user = this.usersServices.login(pForm.value);
    console.log(user);
    if(user !== undefined)
    {
      //token en el localstorage
      localStorage.setItem('token', user!.email);
      alert('usuario existe tienes acceso')
      this.router.navigate(['/dashboard']);
    }
    else{
      alert('usuario no existe')
    }
  }

}
