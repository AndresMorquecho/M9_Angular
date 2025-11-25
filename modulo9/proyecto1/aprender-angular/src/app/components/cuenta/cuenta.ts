import { Component, Input, input } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';
import { cliente } from '../../models/Cliente';
@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css'
})
export class Cuenta {

  cliente: cliente;
  @Input() nombreCliente: string = "";

  constructor() {
    this.cliente = new cliente(1, "Andres", "Morquecho", "andres@hotmail.com", 800)
  }

}

