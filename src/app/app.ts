import { SyncComponent } from './extensions/sync/sync.component';
import { enableProdMode, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';
import { authStore, authInitialState } from './store/auth.store';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '@angular/material';
import { routes } from './app.routes';
import { Authentication } from './services/authentication';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.provideStore({ authStore }, { authStore: authInitialState }),
    ],
    providers: [Authentication],
    declarations: [SyncComponent, HomeComponent, LoginComponent],
    bootstrap: [SyncComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
