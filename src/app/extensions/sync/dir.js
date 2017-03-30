"use strict";
var os = require('os');
var fs = require('fs');
var electron = require('electron');
var ipcRenderer = electron.ipcRenderer;
var Mkdir = (function () {
    function Mkdir() {
    }
    Mkdir.prototype.create = function (dir) {
        var newDir = os.homedir() + '/' + dir;
        fs.exists(newDir, function (params, status) {
            // if (process.platform = 'linux') {
            if (status !== true) {
                fs.mkdir(newDir, function (_, t) { });
                fs.chmod(newDir, '777', function (_, t) {
                });
            }
            else {
                fs.chmod(newDir, '777', function (_, t) {
                });
            }
            // } else if (process.platform = 'win32') {
            //     //please implement this here the logic 
            // }
        });
        return true;
    };
    return Mkdir;
}());
exports.Mkdir = Mkdir;
