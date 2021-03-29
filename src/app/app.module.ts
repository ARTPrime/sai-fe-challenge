import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { mockBackendProvider } from './core/interceptors/mock-api.interceptor';
import { UserFullnamePipe } from './core/pipes/user-fullname/user-fullname.pipe';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [mockBackendProvider],
    bootstrap: [AppComponent],
})
export class AppModule {}
