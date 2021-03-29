import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

const articles = [
    {
        title: 'Article 1',
        author: 'Author Name',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor necessitatibus quae eaque? Nulla ut rem harum necessitatibus. Quam in natus accusantium corporis error dicta tenetur laboriosam iste quasi harum? Omnis?',
    },
    {
        title: 'Article 2',
        author: 'Author Name',
        description:
            'Dolor necessitatibus quae eaque? Nulla ut rem harum necessitatibus. Quam in natus accusantium corporis error dicta tenetur laboriosam iste quasi harum? Omnis?',
    },
    {
        title: 'Article 3',
        author: 'Author Name',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor necessitatibus quae eaque? Nulla ut rem harum necessitatibus. Omnis?',
    },
    {
        title: 'Article 4',
        author: 'Author Name',
        description:
            'Amet consectetur adipisicing elit. Dolor necessitatibus quae eaque? Nulla ut rem harum necessitatibus. Quam in natus accusantium corporis error dicta tenetur laboriosam iste quasi harum? Omnis?',
    },
    {
        title: 'Article 5',
        author: 'Author Name',
        description:
            'Dolor necessitatibus quae eaque? Nulla ut rem harum necessitatibus. Corporis error dicta tenetur laboriosam iste quasi harum? Omnis?',
    },
];

@Injectable()
export class MockInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.url === 'http://localhost:4200/api/auth') {
            if (req.method === 'POST' && req.params.get('username')) {
                if (req.params.get('username') === 'admin') {
                    return of(
                        new HttpResponse({
                            status: 200,
                            body: {
                                first_name: 'FirstName',
                                last_name: 'LastName',
                            },
                        })
                    );
                }
            }
            if (req.method === 'GET') {
                return of(
                    new HttpResponse({
                        status: 200,
                        body: {
                            first_name: 'FirstName',
                            last_name: 'LastName',
                        },
                    })
                );
            }
        }
        if (req.url === 'http://localhost:4200/api/articles') {
            if (req.method === 'GET') {
                return of(
                    new HttpResponse({
                        status: 200,
                        body: articles,
                    })
                );
            }
        }
        return next.handle(req);
    }
}

export const mockBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: MockInterceptor,
    multi: true,
};
