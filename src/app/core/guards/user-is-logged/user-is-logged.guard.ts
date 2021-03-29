import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserIsLoggedGuard implements CanLoad {
    constructor(private router: Router) {}
    canLoad(): boolean {
        const user_data = localStorage.getItem('user_data');
        if (!user_data) {
            this.router.navigate(['login']);
        }
        return localStorage.getItem('user_data') ? true : false;
    }
}
