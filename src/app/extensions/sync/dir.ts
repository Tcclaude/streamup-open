var os = require('os');
var fs = require('fs');
import electron = require('electron');
let { ipcMain } = electron;

export class Mkdir {
    private dir: string;
    constructor() {
        ipcMain.on('create-dir', (res) => {
            console.log('git instruction down here');
        });

    }

    public create(dir: string): boolean {

        let newDir = os.homedir() + '/' + this.dir;
        fs.exists(newDir, function (params, status) {
            if (status !== true) {
                fs.mkdir(newDir, function (_, t) { });
                fs.chmod(newDir, '777', function (_, t) {

                });

            } else {
                fs.chmod(newDir, '777', function (_, t) {

                });
            }

        });
        return true;
    }
}
//auto run function! to work any time anywhere!
new Mkdir();
