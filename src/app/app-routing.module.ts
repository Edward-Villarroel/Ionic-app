import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { MapViewComponent } from './map-view/map-view.component'; // Ajusta la ruta según la ubicación de tu componente

const routes: Routes = [
  {
    path: 'map-view',
    component: MapViewComponent,
  },
  {
    path: '',
    redirectTo: 'map-view',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
=======

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
    
  },
  
    
  {
    path: 'landing-page',
    loadChildren: () => import('./paginas/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule),

  },


>>>>>>> 347f1898adf707f930fcb1dadf54b3c7db3b0754
];

@NgModule({
  imports: [
<<<<<<< HEAD
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 347f1898adf707f930fcb1dadf54b3c7db3b0754
