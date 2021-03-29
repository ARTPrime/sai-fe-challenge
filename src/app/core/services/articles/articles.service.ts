import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ArticlesService {
    constructor(private http: HttpClient) {}

    public getArticles() {
        return this.http.get('http://localhost:4200/api/articles');
    }
}
