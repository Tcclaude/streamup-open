import { DB } from './../extensions/db/db';
import { Mkdir as Dir } from './../extensions/sync/dir';
import { AppState } from './../store/appState.store';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import electron = require('electron');

let { ipcRenderer } = electron;
//TODO install  "sequelize-cli": "^2.5.1", "pg-hstore": "^2.3.2" "sequelize-cli": "^2.5.1"  "@angular/cli": "1.0.0-rc.0"
@Component({
    selector: 'sbox',
    styleUrls: ['./app.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    isDarkTheme: boolean = false;
    db = new DB();
    dir = new Dir();
    constructor() {

    }
    ngOnInit() {

        this.dir.create('Sbox');
    }
    isAutoSync(): boolean {

        return false;
    }
    createFolder(name: String) {

        this.dir.create('Sbox/' + name);
        
    }
    checkAuthentication() { }
}
