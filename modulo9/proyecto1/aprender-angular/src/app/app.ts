import { Component, signal } from '@angular/core';
import { config } from './models/config';

import { MiPerfil } from "./components/mi-perfil/mi-perfil";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer proyecto angular');

  titulo = config.tilte;



  descripcion = config.description;



}

