import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   nombre:string=""
   usuario:string=""
   contrasena:string=""
  constructor(public mensaje:ToastController, private route:Router) { }
   

    async mensajeExito(){
        const toast= await this.mensaje.create({
          message:'inicio de sesion exitoso',
          duration:2000
        });
        toast.present();

    }
    ingresar(){
      if(this.usuario ==="asd"&& this.contrasena==="1234"){
        
        console.log("inicio exitoso")
        this.mensajeExito()
        this.route.navigate(['/home'])
      }
       else{
        console.log("informacion erronea")
       }
   }
  ngOnInit() {
  }

}
