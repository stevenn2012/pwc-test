import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UtilService {

    TOKEN_KEY = "OO123WWdssxc";
    USER_KEY = "PPQWEDASdsss";

    private user : any = undefined;

    constructor(private router: Router){

    }

    getJwtToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    setJwtToken(token) {
        if (token != undefined && token != "" && token != null)
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    removeJwtToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    setCurrentUser(user) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
    
    getCurrentUser() {
        this.user = localStorage.getItem(this.USER_KEY);
        return this.user;
    }

    removeCurrentUser() {
        localStorage.removeItem(this.USER_KEY);
        this.router.navigate(['/']);
    }

    getCurrentUserKey(uKey) {
        let user = this.getCurrentUser();

        return user[uKey];
    }
}


