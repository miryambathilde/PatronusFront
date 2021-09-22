import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deportista } from "../interfaces/deportista.interface";

@Injectable({
  providedIn: 'root'
})
export class AthletesService {
  // arrDeportistas: Deportista[];

  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://2828-85-62-2-98.ngrok.io/api/athletes/';

    // this.arrDeportistas = [
    //   {
    //     id: 1,
    //     nombre: 'Rosa',
    //     apellidos: 'Estevan',
    //     edad: 30,
    //     email: 'rosa@gmail.com',
    //     foto:
    //       'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2014/09/26/14117184454179.jpg',
    //     deporte: 'Baloncesto',
    //     pais: 'España',
    //     porcentaje: 95,
    //     patrocinadores: 'BBVA',
    //     fecha: '2021-11-05',
    //     dinero: 10000,
    //     contraseña: '1234',
    //     rendimiento:
    //       'https://www.eduardbarcelo.com/wp-content/uploads/2019/04/grafico_gestion_rendimiento.jpg'
    //   },
    //   {
    //     id: 2,
    //     nombre: 'Stephane',
    //     apellidos: 'Messod',
    //     edad: 23,
    //     email: 'stephane@gmail.com',
    //     foto:
    //       'https://st3.depositphotos.com/12985790/19034/i/600/depositphotos_190344190-stock-photo-side-view-of-handsome-young.jpg',
    //     deporte: 'Sofing',
    //     porcentaje: 65,
    //     fecha: '2021-11-05',
    //     patrocinadores: 'CaixaBank',
    //     dinero: 11500,
    //     pais: 'Francia',
    //     contraseña: '1234',
    //     rendimiento:
    //       'https://www.eduardbarcelo.com/wp-content/uploads/2019/04/grafico_gestion_rendimiento.jpg'
    //   },
    //   {
    //     id: 3,
    //     nombre: 'Jesús',
    //     apellidos: 'Denis',
    //     edad: 22,
    //     email: 'jesus@gmail.com',
    //     foto:
    //       'https://2.bp.blogspot.com/-mtNMPNMEMBc/UmeJPlbjO_I/AAAAAAAAHNY/V9QBIYAUMNA/s1600/150688_331091047004832_258551495_n.jpg',
    //     deporte: 'Musculación',
    //     porcentaje: 75,
    //     fecha: '2021-11-05',
    //     patrocinadores: 'Banco Santander',
    //     dinero: 8500,
    //     pais: 'España',
    //     contraseña: '1234',
    //     rendimiento:
    //       'https://palomasala.com/wp-content/uploads/2017/03/Que-es-el-sobreentrenamiento-o-Sindrome-de-sobreentrenamiento-1.png'
    //   }
    // ];
  }


  offers(): Promise<any> {
    const idAthlete = localStorage.getItem('id');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    }
    return this.httpClient.get<any>(this.baseUrl + 'allOffers/' + idAthlete, httpOptions).toPromise();
  }



  editAthlete(pForm: {name: string, surname: string, age: number, country: string, email: string, sport:string}): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token')!
      })
    };
    const id = localStorage.getItem('id');
    return this.httpClient.put<any>(this.baseUrl + 'profile/' + id, pForm, httpOptions).toPromise();
  }
}
