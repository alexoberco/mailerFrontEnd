// src/main.ts
import { enableProdMode }    from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './enviroments/enviroment';
import { AppComponent }      from './app/app.component';
import { appConfig }          from './app/app.config';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
