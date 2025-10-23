import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css'
})
export class Prestamos {

  public web = "https://open.spotify.com/intl-es/";
  public redirigir = true;
  public prestamosList = [
    { id:1, monto: 200, estado: 'Aprobado'},
    { id:2, monto: 400, estado: 'Aprobado'},
    { id:3, monto: 200, estado: 'Pendiente'},
    { id:4, monto: 100, estado: 'Pendiente'},
    { id:5, monto: 700, estado: 'Pendiente'},
    { id:6, monto: 800, estado: 'Aprobado'},
  ];


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
