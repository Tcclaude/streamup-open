import { HttpClientService } from './../../services/http-client.service';
import { Git } from './../git/init';
import { DB } from './../db/db';
import { Mkdir as Dir } from './dir';
import { AppState } from './../../store/appState.store';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import electron = require('electron');
let { ipcRenderer } = electron;
import Redis = require('ioredis');

// let redis = ;
import isOnline = require('is-online');
@Component({
    selector: 'sbox',
    styleUrls: ['./sync.theme.scss'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './sync.component.html',
    providers: [HttpClientService]
})
export class SyncComponent implements OnInit {
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
        //TODO the subfolders not being injected inside the parent folder by now(need help on this).
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
    isAutoSync(e) {
        type toggle = 'true' | 'false';
        
    }
    autoFetch() {

        isOnline().then(online => {

            if (!online) {
                new Redis().subscribe('folder-created');
                new Redis().on('message', function (channel, message) {

                    let serialized = JSON.parse(message);
        //             console.log(serialized);
        //             //TODO understanding how to fetch file online and save on Disk using fs.createWriteStream :: new Buffer("utf-8") is faked don't know what i am doing!
        //             // new Watcher().downloadOnFly('http://localhost:8000/api/downloads/file/' + serialized.data.fileHandle + '/' + serialized.data.folderId, serialized.data.fileName, '', function (res: boolean) {
        //             //     console.log('done');
        //             // });

                });
            }
        });
    }
    createFolder(name: String) {

        this.dir.create('Sbox/' + name);
        new Git().init('Sbox/' + name);

    }
    checkAuthentication() { }
}
