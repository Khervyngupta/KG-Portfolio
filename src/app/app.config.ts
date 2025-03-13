import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgsRevealConfig, NgsRevealModule } from 'ngx-scrollreveal';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(MatToolbarModule, MatButtonModule, MatIconModule, NgsRevealModule),
    provideAnimations(),
    importProvidersFrom(NgsRevealConfig)
  ]
};