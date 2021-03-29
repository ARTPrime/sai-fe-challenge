import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIsLoggedGuard } from './core/guards/user-is-logged/user-is-logged.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () =>
            import('./modules/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'articles',
        canLoad: [UserIsLoggedGuard],
        loadChildren: () =>
            import('./modules/articles/articles.module').then(
                (m) => m.ArticlesModule
            ),
    },
    {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'articles',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
