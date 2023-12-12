// src/app/app-routing.module.ts
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Standalone component
import { CarListComponent } from './components/car-list/car-list.component'; // Standalone component

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'car-list', component: CarListComponent },
  // ... other routes
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
