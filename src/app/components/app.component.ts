import { HttpClientService } from './../services/http-client.service';
import { Git } from './../extensions/git/init';
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

        this.http.getFolders()
            .subscribe(res => {
                res.forEach(folder => {
                    this.db.saveFolder(folder);
                    if (folder.parent === 0) {
                        if (folder.has_copy === 1) {
                            this.createFolder(folder.name + '(' + folder.copy_count + ')');
                        } else if (folder.has_copy === 0) {
                            this.createFolder(folder.name);
                        }
                    }
                });

            });
        var tmp = [];
        this.http.getSubFolders()
            .subscribe(res => {
                res.forEach(subf => {
                    var oldId = 0;
                    if (oldId !== subf.id) {
                        oldId = subf.id;
                        this.http.getPath(subf.id)
                            .subscribe(res => {
                                res.forEach(fpath => {
                                    tmp.push(fpath.name);
                                    
                                });
                            });

                    }

                });
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
