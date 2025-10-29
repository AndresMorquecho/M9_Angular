import { Component } from '@angular/core';
import { MiPerfil } from '../mi-perfil/mi-perfil';
import {CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { cambiarLetrasPipe } from '../../pipes/cambiarLetras';
import { codigoAscciPipe } from '../../pipes/codigoAscii';


@Component({
  selector: 'app-prestamos',
  imports: [ codigoAscciPipe, cambiarLetrasPipe,CurrencyPipe, LowerCasePipe, UpperCasePipe, DatePipe  ],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css'
})
export class Prestamos {

  public web = "https://open.spotify.com/intl-es/";
  public redirigir = true;
  public prestamosList = [
    { fecha: "2025-1-2", id: 1, monto: 200, estado: 'Aprobado' },
    { fecha: "2025-1-2", id: 2, monto: 400, estado: 'Aprobado' },
    { fecha: "2025-1-2", id: 3, monto: 200, estado: 'Pendiente' },
    { fecha: "2025-1-2", id: 4, monto: 100, estado: 'Pendiente' },
    { fecha: "2025-1-2", id: 5, monto: 700, estado: 'Pendiente' },
    { fecha: "2025-1-2", id: 6, monto: 800, estado: 'Aprobado' },
  ];

  public prestamo = { id: 1, tipo: 'Hipotecario', interes: 10 };

  cambiarEstado() {
    if (this.redirigir) {
      this.redirigir = false;
      this.web = "";
    } else {
      this.redirigir = true;
      this.web = "https://open.spotify.com/intl-es/";
    }
  }

}
