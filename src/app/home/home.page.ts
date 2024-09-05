import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController ,AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
   usuario:string=""
   contrasena:string=""
  constructor(public mensaje:ToastController, private route:Router, public alerta:AlertController) {}

   ingresar(){
    if(this.usuario ==="asd"&& this.contrasena==="1234"){
      this.route.navigate(['/home'])
    }
     else{
      console.log("informacion erronea")
     }
 }
 ngOnInit() {
}
}
