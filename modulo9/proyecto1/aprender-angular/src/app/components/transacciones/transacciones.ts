import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transacciones',
  imports: [NgClass, NgStyle],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css'
})
export class Transacciones {
  public disponible: boolean = true;
}
