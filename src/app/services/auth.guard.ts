// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// RxJS
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { config } from '../config';

@Injectable()
export class AuthGuard implements CanActivate {
errors : any = ['',null,undefined,'undefined','null'];
    constructor(private router: Router, public userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree  {
        var token = localStorage.getItem('indigo_auth_token');
        var userId = this.userService.decryptData(token,config.ENC_SALT);
        if(userId != 0 && this.errors.indexOf(userId) == -1){
          return true;
        }
        else{
          return this.router.navigate(['/login']);
        }
    }
}
