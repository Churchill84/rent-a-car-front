import { Injector } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import {AuthService} from "../service/auth.service";

let authService: AuthService;

export const initAuthGuard = (injector: Injector) => {
  authService = injector.get(AuthService);
};

export const authGuard: CanActivateFn = (route, state) => {
  return authService.isLoggedIn();
};
