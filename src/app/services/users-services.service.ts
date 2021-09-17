import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  arrUsers: User[];
  constructor() {
    this.arrUsers = [
      {
        id: 1,
        nombre: "Jesus",
        apellidos: 'Perez',
        edad: 28,
        email: "jesus@gmail.com",
        password: "12345",
        rol: "deportista",
      },
      {
        id: 2,
        nombre: "Miryam",
        apellidos: 'Bathilde',
        edad: 30,
        email: "miryam@gmail.com",
        password: "12345",
        rol: "sponsor",
      }
    ]
  }

  register(pFormValue: any): string {
    pFormValue.rol = "deportistas";
    this.arrUsers.push(pFormValue);
    console.log(this.arrUsers);
    return 'usuario registrado';
  }

  login(pFormValue: any): User | undefined {
    return this.arrUsers.find(user => user.email === pFormValue.email && user.password === pFormValue.password)
  }
}
