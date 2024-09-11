import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
