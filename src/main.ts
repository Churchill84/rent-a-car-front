import {enableProdMode, importProvidersFrom, Injector} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import {environment} from "./environments/environment";
import {AppRoutingModule} from "./app/app-routing.module";
import {initAuthGuard} from "./app/guard/auth.guard";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(HttpClientModule),
    // ... other global providers if any
  ]
}).then(appRef => {
  const injector: Injector = appRef.injector;
  initAuthGuard(injector); // Initialize the authGuard with the injector
}).catch(err => console.error(err));
