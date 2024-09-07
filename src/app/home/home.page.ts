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

  async ingresar() {
    if (this.usuario === "asd" && this.contrasena === "1234") {
      const alert = await this.alerta.create({
        header: 'Éxito',  
        message: 'Inicio de sesión completado',  
        buttons: [{
          text: 'OK',  
          handler: () => {
            this.route.navigate(['/login']);  
          }
        }]
      });
      await alert.present();  
    } else {
      const toast = await this.mensaje.create({
        message: 'Usuario o contraseña incorrectos',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  ngOnInit() {}
}
