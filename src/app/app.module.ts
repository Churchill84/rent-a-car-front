import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'; // Import RouterModule and Routes
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarListComponent} from './components/car-list/car-list.component';
import {LoginComponent} from './components/login/login.component';
import {authGuard} from './guard/auth.guard'; // Ensure this is correctly imported

// Define your routes here
const routes: Routes = [
  {
    path: 'car-list',
    component: CarListComponent,
    canActivate: [authGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) // Configure your routes here
  ],
  providers: [],
  bootstrap: [] // Bootstrap the AppComponent or your root component
})
export class AppModule { }
