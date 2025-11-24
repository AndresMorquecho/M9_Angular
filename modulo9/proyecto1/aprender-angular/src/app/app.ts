import { Component, signal } from '@angular/core';
import { Prestamos } from "./components/prestamos/prestamos";
import { Transacciones } from './components/transacciones/transacciones';
import { config } from './models/config';
import { Cine } from './components/cine/cine';
import { Cuenta } from './components/cuenta/cuenta';
@Component({
  selector: 'app-root',
  imports: [ Transacciones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer proyecto angular');

  titulo = config.tilte;



  descripcion = config.description;



}

