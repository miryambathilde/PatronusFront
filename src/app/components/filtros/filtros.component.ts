import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  @Output() filtroPais: EventEmitter<string> = new EventEmitter();
  @Output() filtroDeporte: EventEmitter<string> = new EventEmitter();
  @Output() filtroInvertible: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  //EMITIMOS LOS EVENTOS DE LOS OUTPUTS //
  recogerPais($event: any) {
    this.filtroPais.emit($event.target.value);
  }
  recogerDeporte($event: any) {
    this.filtroDeporte.emit($event.target.value);
  }
  recogerInvertible($event: any) {
    this.filtroInvertible.emit($event.target.value);
  }
}
