import { Injectable } from '@angular/core';
import { Deportista } from "../interfaces/deportista.interface";

@Injectable({
  providedIn: 'root'
})
export class DeportistasService {
  arrDeportistas: Deportista[];

  constructor() {
    this.arrDeportistas = [
      {
        nombre: 'Rosa',
        apellidos: 'Estevan Hernaiz',
        edad: 30,
        email: 'rosa@gmail.com',
        foto: 'fotoderosa',
        deporte: 'baloncesto',
        pais: 'España',
        contraseña: '1234'
      },
      {
        nombre: 'Stephane',
        apellidos: 'Messod',
        edad: 23,
        email: 'stephane@gmail.com',
        foto: 'fotodestephan',
        deporte: 'sofing',
        pais: 'Francia',
        contraseña: '1234'
      },
      {
        nombre: 'Jesús',
        apellidos: 'Denis',
        edad: 22,
        email: 'jesus@gmail.com',
        foto: 'fotodejesus',
        deporte: 'musculación',
        pais: 'España',
        contraseña: '1234'
      }
    ];
  }

  getAll(): Deportista[] {
    return this.arrDeportistas;
  }
}
