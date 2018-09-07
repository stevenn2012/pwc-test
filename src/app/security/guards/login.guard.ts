import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UtilService } from '../../resources/services/util/util.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private util: UtilService, private router: Router) {

    }

    canActivate() {
        if (this.util.getCurrentUser() != undefined) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
        return false;
    }
}
