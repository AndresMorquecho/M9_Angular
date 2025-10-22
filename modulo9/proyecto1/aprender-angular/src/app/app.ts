import { Component, signal } from '@angular/core';
import { Prestamos } from "./components/prestamos/prestamos";

@Component({
  selector: 'app-root',
  imports: [Prestamos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer proyecto angular');
}
