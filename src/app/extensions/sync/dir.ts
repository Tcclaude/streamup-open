var os = require('os');
var fs = require('fs');
import electron = require('electron');
let { ipcRenderer } = electron;
export class Mkdir {

    constructor() {

    }
    public create(dir: string): boolean {

        let newDir = os.homedir() + '/' + dir;
        fs.exists(newDir, function (params, status) {
            // if (process.platform = 'linux') {
                if (status !== true) {
                    fs.mkdir(newDir, function (_, t) { });
                    fs.chmod(newDir, '777', function (_, t) {

                    });

                } else {
                    fs.chmod(newDir, '777', function (_, t) {

                    });
                }
            // } else if (process.platform = 'win32') {
            //     //please implement this here the logic 
            // }

        });
        return true;
    }
}

