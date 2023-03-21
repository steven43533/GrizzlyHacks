import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * Guard that checks if the user is an admin.
 * @remarks
 * This guard is responsible for checking if the user is an admin.
 */
@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(private auth: AuthService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAdmin) {
      return true;
    }
    this.router.navigate(['/home']);

    return false;
  }
}