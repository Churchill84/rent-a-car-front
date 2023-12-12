import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  invalidLogin = false;
  error = '';
  @Output() onSignUpClick = new EventEmitter(); // Event emitter for switching to sign-up

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(): void {

    // Reset error on new submission
    this.error = '';

    if (this.loginForm.invalid) {
      this.invalidLogin = true;
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password)
      .subscribe(
        success => {
          if (success) {
            this.authService.setLoggedIn(true);
            this.router.navigate(['/car-list']).then(navSuccess => {
              if (!navSuccess) {
                console.log('Navigation failed!');
              }
            }).catch(err => {
              console.error('Error during navigation:', err);
            });
          }
        },
        error => {
          this.error = 'Invalid login credentials'; // Consider using a more dynamic error message
          this.invalidLogin = true;
        }
      );
  }

  switchToSignUp() {
    this.onSignUpClick.emit(); // Emit event to switch to sign-up
  }
}
