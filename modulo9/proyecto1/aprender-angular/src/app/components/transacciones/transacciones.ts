import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { transacciones } from "../../models/transaccion";
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-transacciones',
  imports: [NgClass, DatePipe, FormsModule],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',

})
export class Transacciones {
  transacciones: Array<transacciones>;
  descripcionTransaccion: string = "";

  constructor() {
    this.transacciones = [
      new transacciones(1, new Date("10/10/2025"), "Compra en amazon", 50, "Egreso"),
      new transacciones(2, new Date("10/10/2025"), "Compra en super", 10, "Egreso"),
      new transacciones(3, new Date("10/10/2025"), "ingreso de dinero", 40, "Ingreso"),
      new transacciones(4, new Date("10/10/2025"), "horas extras", 250, "Ingreso"),
      new transacciones(5, new Date("10/10/2025"), "Compra en tienda", 150, "Egreso"),
    ]
  }

  showTransaccion(){
    alert(this.descripcionTransaccion);
  }

  ngDoCheck(){
    console.log(this.descripcionTransaccion);
  }
}
