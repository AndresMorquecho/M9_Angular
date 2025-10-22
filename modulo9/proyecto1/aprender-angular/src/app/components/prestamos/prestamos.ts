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


  cambiarEstado(){
    if(this.redirigir){
      this.redirigir = false;
      this.web = "";
    }else{
      this.redirigir = true;
      this.web = "https://open.spotify.com/intl-es/";
    }
  }

}
