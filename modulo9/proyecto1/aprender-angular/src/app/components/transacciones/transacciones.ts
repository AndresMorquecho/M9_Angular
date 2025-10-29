import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transacciones',
  imports: [NgClass],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css'
})
export class Transacciones {
  public disponible: boolean = true;
}
