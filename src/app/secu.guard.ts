import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OjasService } from './ojas.service';

@Injectable({
  providedIn: 'root'
})
export class SecuGuard implements CanActivate {

  constructor(private s: OjasService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.s.isLoggedIn()) {
        return true;
      }
      else{
        this.router.navigate(["home"]);
        return false;
      }
  }
}
