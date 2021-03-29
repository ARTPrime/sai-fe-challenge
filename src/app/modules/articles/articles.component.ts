import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { IArticle } from 'src/app/core/models/article.interface';
import { IUSerData } from 'src/app/core/models/user.interface';
import { ArticlesService } from 'src/app/core/services/articles/articles.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
    selector: 'sai-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
    public user: IUSerData;
    public selectedArticleId: number | undefined;
    public selectedArticle: IArticle | undefined;
    public articles: IArticle[];
    private destroy$: Subject<boolean> = new Subject();
    constructor(
        private authService: AuthService,
        private articleService: ArticlesService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((p) => {
            this.selectedArticleId = Number(p.articleId);
            this.selectedArticle = this.articles
                ? this.articles.find((a) => a.id === this.selectedArticleId)
                : undefined;
        });
    }

    ngOnInit() {
        this.authService
            .getUserData()
            .pipe(take(1))
            .subscribe((u) => (this.user = u as IUSerData));

        this.articleService
            .getArticles()
            .pipe(take(1))
            .subscribe((a) => {
                this.articles = a as IArticle[];
                this.selectedArticle = this.selectedArticleId
                    ? this.articles.find((a) => a.id === this.selectedArticleId)
                    : undefined;
            });
    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

    public onArticleClick(article: IArticle) {
        this.router.navigateByUrl(`articles?articleId=${article.id}`);
    }
}
