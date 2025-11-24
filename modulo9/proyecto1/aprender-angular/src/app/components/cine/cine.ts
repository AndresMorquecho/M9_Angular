import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cine',
  imports: [FormsModule],
  templateUrl: './cine.html',
  styleUrl: './cine.css'
})
export class Cine {

  public titulo: string;

  public peliculas: Array<Pelicula>;
  public peliculasSinDatos: string[] = [];

  // Para trabajar con formularios y binding bidireccional

  public miPelicula: string = "";



  constructor() {
    this.titulo = "Modelos"
    this.peliculas = [
      new Pelicula(1, "El señor de los anillos", "Fantasía", "Peter Jackson", 2001, "Disney Plus", true),
      new Pelicula(2, "Matrix", "Ciencia ficción", "Hermanas Wachowski", 1999, "Netflix", false),
      new Pelicula(3, "Inception", "Ciencia ficción", "Christopher Nolan", 2010, "Netflix", true),
      new Pelicula(4, "Interstellar", "Ciencia ficción", "Christopher Nolan", 2014, "Netflix", true),
      new Pelicula(5, "Gladiator", "Épica", "Ridley Scott", 2000, "Netflix", false),

    ];

  }

  ngOnInit() {
    console.log(this.peliculas);

    this.peliculas[1].titulo = "The Matrix Reloaded";
  }

  showPelicula() {
    alert(this.miPelicula)
  }

  addPelicula() {
    let nuevaPelicula = new Pelicula(this.peliculas.length + 1, this.miPelicula);
    console.log(nuevaPelicula);
    this.peliculas.push(nuevaPelicula);
  }

}
