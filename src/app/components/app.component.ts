import { Git } from './../extensions/git/init';
import { HttpClientService } from './../services/http-client.service';
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
    templateUrl: './app.component.html',
    providers: [HttpClientService]
})
export class AppComponent implements OnInit {
    isDarkTheme: boolean = false;
    db = new DB();
    dir = new Dir();
    constructor(private http: HttpClientService) {
        
        this.http.get('http://localhost:8000/api/folders/list/undefined').subscribe(res => {
            
            res.json().forEach(e => {
                this.db.saveFolder(e);
                this.createFolder(e.name);
            });
            
        }, (err) => {
            console.log(err);
        });
    }
    ngOnInit() {

        this.dir.create('Sbox');
        
    }
    isAutoSync(): boolean {

        return false;
    }
    createFolder(name: String) {

        this.dir.create('Sbox/' + name);
        new Git().init('Sbox/' + name);

    }
    checkAuthentication() { }
}
