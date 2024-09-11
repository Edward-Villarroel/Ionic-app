import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken =
  'pk.eyJ1IjoiYWRpaWMiLCJhIjoiY20wdjhibnBtMWRteTJpb2sxZWIxMGVyMyJ9.rdbA1eu4DcDqWK092l5bhg';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
