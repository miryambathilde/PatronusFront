import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  baseUrl: string;

  // arrUsers: User[];
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users/';
    //   this.arrUsers = [
    //     {
    //       id: 1,
    //       nombre: "Jesus",
    //       apellidos: 'Perez',
    //       edad: 28,
    //       email: "jesus@gmail.com",
    //       password: "12345",
    //       rol: "deportista",
    //     },
    //     {
    //       id: 2,
    //       nombre: "Miryam",
    //       apellidos: 'Bathilde',
    //       edad: 30,
    //       email: "miryam@gmail.com",
    //       password: "12345",
    //       rol: "sponsor",
    //     }
    //   ]
  }

  registerSponsor(pForm: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.httpClient
      .post<any>(this.baseUrl + 'register/sponsor', pForm, httpOptions)
      .toPromise();
  }

  registerAthlete(pForm: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.httpClient
      .post<any>(this.baseUrl + 'register/athlete', pForm, httpOptions)
      .toPromise();
  }

  login(pForm: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.httpClient
      .post<any>(this.baseUrl + 'login', pForm, httpOptions)
      .toPromise();
  }

  getNews(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.httpClient
      .get<any>(this.baseUrl + 'news', httpOptions)
      .toPromise();
  }

  // register(pFormValue: any): string {
  //   pFormValue.rol = "deportistas";
  //   this.arrUsers.push(pFormValue);
  //   console.log(this.arrUsers);
  //   return 'usuario registrado';
  // }

  // login(pFormValue: any): User | undefined {
  //   return this.arrUsers.find(user => user.email === pFormValue.email && user.password === pFormValue.password)
  // }
}
