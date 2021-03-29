import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { UserFullnamePipe } from 'src/app/core/pipes/user-fullname/user-fullname.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ArticlesComponent, UserFullnamePipe],
    imports: [
        CommonModule,
        ArticlesRoutingModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
    ],
})
export class ArticlesModule {}
