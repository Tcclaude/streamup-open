
import Sequelize = require('sequelize');
import db = require('../../../../models/index.js');

export interface DirObject {
    
    folder_id: number;
    name: string;
    copy_count: string;
    created_at: string;
    delete_status: string;
    updated_at: string;
    forder_privacy: string;
    type: string;
    size: number;
    parent: boolean;
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
    saveFolder(data: DirObject) {
        console.log(data);
        // db.sync({ force: true }).success(function (err) {
        //     db.Folder.create({
        //         data
        //     }).success(function (folder) {
        //         console.log('saved on disk:' + folder);
        //     });
        // });
    }
}
