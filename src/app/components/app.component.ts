import { DB } from './../extensions/db/db';
import { Mkdir as Dir } from './../extensions/sync/dir';
import { AppState } from './../store/appState.store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import electron = require('electron');

let { ipcRenderer } = electron;

@Component({
    selector: 'sbox',
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    isDarkTheme: boolean = false;
    db = new DB();
    constructor() {
        
    }
    ngOnInit() {
        ipcRenderer.send('load-contents', 'Sure We are doing it right');
        new Dir('Sbox').create();
    }
    isAutoSync(): boolean {
        ipcRenderer.send('load-contents', 'it is checked sure');
        return false;
    }
    createFolder() {
        
    }
    checkAuthentication() { }
}
