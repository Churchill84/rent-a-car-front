import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from "./service/auth.service";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SearchComponent} from "./components/search/search.component";
import {CarListComponent} from "./components/car-list/car-list.component";
import {LoginComponent} from "./components/login/login.component";
import {CarDialogComponent} from "./components/car-dialog/car-dialog.component";
import {SignupComponent} from "./components/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CarListComponent,
    LoginComponent,
    CarDialogComponent,
    SignupComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls and made it an array
})
export class AppComponent {
  showSignUp = false;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  handleSignUpClick() {
    this.showSignUp = true;
  }
}
