import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IArticle } from 'src/app/core/models/article.interface';
import { IUSerData } from 'src/app/core/models/user.interface';
import { ArticlesService } from 'src/app/core/services/articles/articles.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
    selector: 'sai-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
    public user: IUSerData;
    public selectedArticle: IArticle;
    public articles: IArticle[];
    constructor(
        private authService: AuthService,
        private articleService: ArticlesService
    ) {}

    ngOnInit() {
        this.authService
            .getUserData()
            .pipe(take(1))
            .subscribe((u) => (this.user = u as IUSerData));

        this.articleService
            .getArticles()
            .pipe(take(1))
            .subscribe((a) => (this.articles = a as IArticle[]));
    }

    public onArticleClick(article: any) {
        this.selectedArticle = article;
    }
}
