import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { IUSerData } from '../../models/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public loginUser(data: { username: string; password: string }) {
        return this.http
            .post(
                'http://localhost:4200/api/auth',
                {},
                {
                    params: new HttpParams()
                        .set('username', data.username)
                        .set('password', data.password),
                }
            )
            .pipe(
                tap((user: any) =>
                    localStorage.setItem('user_data', JSON.stringify(user))
                )
            );
    }

    public getUserData() {
        return this.http.get('http://localhost:4200/api/auth');
    }
}
