import { Component, OnInit,AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import { ToastController ,AlertController} from '@ionic/angular';
import { Map, Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit ,AfterViewInit{
  @ViewChild('mapDiv') mapDivElement!: ElementRef;
   imageURL:string="";
   nombre:string="";
   usuario:string="";
   contrasena:string="";
   cerrar:string="";
  constructor( public mensaje:ToastController, private route:Router, public alerta:AlertController) {
    this.updateImage();
    this.msg();
   }
   
    updateImage(){
      if (localStorage.getItem('ingresado')=='true'){
        this.imageURL='assets/icon/logo_duoc.png';
      }else{
        this.imageURL='assets/icon/usuario.png'
      }
    }
    async mensajeExito(){
        const toast= await this.mensaje.create({
          message:'inicio de sesion exitoso',
          duration:2000
        });
        toast.present();
        

    }
    async presentAlert() {
      const alert = await this.alerta.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
      });
    
      await alert.present();
    }
    ingresar(){
    
        this.route.navigate(['/home']);
      }
    
    async msg(){
      if (localStorage.getItem('ingresado')=='true'){
        this.cerrar='cerrar sesion';
      }else {
        this.cerrar='';
      }
    }
    
    async cerrarSesion(){

        localStorage.setItem('ingresado','false');
        this.route.navigate(['/landing-page']);
    }
  ngOnInit() {
  }
  
   
  

  
    ngAfterViewInit(): void {
      // Coordenadas predeterminadas de Viña del Mar
      const defaultCoordinates: [number, number] = [-71.551, -33.0244];
  
      // Inicia el mapa
      const map = new Map({
        container: this.mapDivElement.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: defaultCoordinates,
        zoom: 13,
      });
  
      // Intentar obtener la ubicación del usuario
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userCoordinates: [number, number] = [
              position.coords.longitude,
              position.coords.latitude,
            ];
  
            // Centrar el mapa en la ubicación del usuario
            map.setCenter(userCoordinates);
  
            // Añadir un círculo en la ubicación del usuario
            map.on('load', () => {
              map.addLayer({
                id: 'user-location-circle',
                type: 'circle',
                source: {
                  type: 'geojson',
                  data: {
                    type: 'FeatureCollection',
                    features: [
                      {
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: userCoordinates,
                        },
                        properties: {},
                      },
                    ],
                  },
                },
                paint: {
                  'circle-radius': 50, // Radio del círculo (fijo)
                  'circle-color': '#FF0000', // Color
                  'circle-opacity': 0.6, // Opacidad
                },
              });
            });
          },
          (error) => {
            console.error('Error obteniendo la ubicación del usuario:', error);
            // Centrar el mapa en las coordenadas predeterminadas si hay un error
            map.setCenter(defaultCoordinates);
          }
        );
      } else {
        console.error('No es soportada por este navegador.');
        // Centrar el mapa en las coordenadas predeterminadas si geolocalización no está disponible
        map.setCenter(defaultCoordinates);
      }
  
      // Ubicaciones de caja vecia
      const cajasVecinas = [
        {
          name: 'Panaderia Katty',
          coordinates: [-71.53636679908482, -33.006163740103155] as [
            number,
            number
          ],
        },
        {
          name: 'Mi kioskito',
          coordinates: [-71.57058817980005, -33.02403876831767] as [
            number,
            number
          ],
        },
  
        {
          name: 'Bazar de los Estudiantes',
          coordinates: [-71.53339117712126, -33.03199775045686] as [
            number,
            number
          ],
        },
      ];
  
      // Añadir marcadores de cajas vecinas al mapa
      cajasVecinas.forEach((caja) => {
        const popup = new Popup({ offset: 25 })
          .setText(caja.name)
          .setHTML(
            `<div style="color: #FF0000; background-color: #fff; padding: 5px;">${caja.name}</div>`
          );
  
        new Marker().setLngLat(caja.coordinates).setPopup(popup).addTo(map);
      });
  
      // Opcional: Ajustar el tamaño del mapa al contenedor
      map.resize();
    }
  
  
  
}
