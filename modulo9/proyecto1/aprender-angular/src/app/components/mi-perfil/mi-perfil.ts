import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-perfil',
  imports: [],
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css'
})

export class MiPerfil {

  public name: string;
  public age: number;
  public address: string;
  public phone: string;
  public profession: string;


  constructor() {
    this.name = "Andres Israel";
    this.age = 26.0;
    this.address = "Calle Falsa 123";
    this.phone = "120938109238"
    this.profession = "Desarrollador de Software";
    console.log("Se cargo el componente de perfil");
  }


}
