import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";
import { Subject, takeUntil } from 'rxjs';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent implements OnDestroy {
  isLoggedIn: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn()
      .pipe(takeUntil(this.destroy$))
      .subscribe(status => {
        this.isLoggedIn = status;
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
