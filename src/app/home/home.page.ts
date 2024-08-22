import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string=""
  niveles:any[]=[
    {id:1,nivel:"educacion basica"},
    {id:2,nivel:"media"},
    {id:3,nivel:"superior"}
  ]

  constructor() {}

   mostrarNombre(){
    console.log(this.nombre)
   }
}
