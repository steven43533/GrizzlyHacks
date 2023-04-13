import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * Guard that checks if the user is a super admin.
 * @remarks
 * This guard is responsible for checking if the user is a super admin.
 */
@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuard {
  
  constructor(private auth: AuthService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.auth.adminLevel == 2){
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
  
}
