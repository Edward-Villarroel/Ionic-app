import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string=""

  constructor() {}
  
   mostrarNombre(){
    console.log(this.nombre)
   }
}
