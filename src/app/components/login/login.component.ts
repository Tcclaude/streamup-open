/**
 * Import decorators and services from angular
 */
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Import the ngrx configured store
 */
import { Store } from '@ngrx/store';
import { AppState } from '../../store/appState.store';

/**
 * Import the authentication service to be injected into our component
 */
import { Authentication } from '../../services/authentication';

@Component({
    selector: 'ae-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    unsubscribe: any;
    authenticated: boolean;

    //Inject Authentication service on construction
    constructor(private _router: Router, private _ngZone: NgZone, private auth: Authentication, public store: Store<AppState>) {
        this.auth = auth;

        this.checkAuth();

        this.store.map((fullStore: any) => {
            return fullStore.authStore;
        }).subscribe((state: any) => {
            console.log(state);
            this.authenticated = state.authenticated;
            //Because the BrowserWindow runs outside angular for some reason we need to call Zone.run()
            this._ngZone.run(() => {
                if (state.username != '') {
                    this._router.navigate(['home']);
                }
            });
        });
    }
    _(x) {
        return document.getElementById(x);
    }
    enableFilepanel() {
        this._('filePanel').style.display = 'block';
        this._('filedisablelebtn').style.display = 'block';
        this._('filenablebtn').style.display = 'none';
    }
    disableFilepanel() {
        this._('filedisablelebtn').style.display = 'none';
        this._('filenablebtn').style.display = 'block';
        this._('filePanel').style.display = 'none';
    }
    checkAuth() {
        let storageToken = window.localStorage.getItem('authToken');

        if (storageToken) {
            this.auth.requestUserData(storageToken);
        }
    }

    authenticate() {
        this.auth.githubHandShake();
    }
}
