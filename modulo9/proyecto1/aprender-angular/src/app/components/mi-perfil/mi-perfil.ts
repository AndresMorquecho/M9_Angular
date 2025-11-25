import { Component } from '@angular/core';
import { Cuenta } from '../cuenta/cuenta';
import { Prestamos } from '../prestamos/prestamos';
import { Transacciones } from '../transacciones/transacciones';
@Component({
  selector: 'app-mi-perfil',
  imports: [Cuenta, Transacciones],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css'
})

export class MiPerfil {

  nombrecliente: string = "Juan Pérez";
  mensajeRecibido: string= "";


  public name: string;
  public age: number;
  public address: string;
  public phone: string;
  public profession: string;
  public mostrarCuenta: boolean = true;


  constructor() {
    this.name = "Andres Israel";
    this.age = 26.0;
    this.address = "Calle Falsa 123";
    this.phone = "120938109238"
    this.profession = "Desarrollador de Software";
  }

  recibirMensaje(event: string){
    this.mensajeRecibido = event;
    alert("Mensaje recibido: " + this.mensajeRecibido)
  }
  ngDoCheck() {
    console.log("Componente Actualizado");
  }

  ngAfterViewInit() {
    console.log("la vista esta cargada");
  }

  cambiarEdad() {
    this.age = 27;
  }
  cambiarDireccion() {
    this.address = "Avenida Siempre Viva 742";
  }

  cambiarMostrarCuenta(val: boolean) {
    this.mostrarCuenta = val;
  }

}
