import { Mkdir as Dir } from './../extensions/sync/dir';
import { AppState } from './../store/appState.store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sbox',
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    isDarkTheme: boolean = false;
    isAutoSync: boolean = false;
    ngOnInit() {
        new Dir('Sbox').create();
    }
    checkAuthentication() { }
}
