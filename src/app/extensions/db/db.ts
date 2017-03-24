
import Sequelize = require('sequelize');
var db = require('./models/index');

interface DirObject {
    folder_id: number;
    name: string;
    type: string;
    size: string;
    parent: number;
    has_copy: boolean;
    user_id: number;
}
export class DB {
    getFolder(): void {

        // var findUserDevice = function (id) {
        //     return db.Folder.find({
        //         where: {
        //             id: id
        //         }
        //     }).then(function (device) {
        //         if (!device) {
        //             return 'not find';
        //         }
        //         return device.dataValues;
        //     });
        // };
        // findUserDevice(1).then(function (UserDevice) {
        //     console.log(UserDevice);
        // });
    }
}
