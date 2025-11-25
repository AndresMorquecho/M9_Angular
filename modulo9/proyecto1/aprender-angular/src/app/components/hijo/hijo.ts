import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

  @Input() NombrePapa: string = "";

  @Output() saludoHijo = new EventEmitter();

  enviarSaludo() {
    this.saludoHijo.emit('Hola como estas papa');

  }


}
