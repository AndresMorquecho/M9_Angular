import { Component, signal } from '@angular/core';
import { Prestamos } from "./components/prestamos/prestamos";
import { Transacciones } from './components/transacciones/transacciones';

@Component({
  selector: 'app-root',
  imports: [Transacciones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer proyecto angular');
}
