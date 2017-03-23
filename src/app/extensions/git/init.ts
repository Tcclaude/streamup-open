// var nodegit = require('nodegit');
// import os = require('os');
// var fs = require('fs');
// var path = require('path');
// var promisify = require('promisify-node');
// var fse = promisify(require('fs-extra'));

export class Git {

    init(dir: string) {

        //     var isBare = 0;
        //     var repo;
        //     var index; var oid;
        //     var fileName = 'newfile.txt';
        //     var fileContent = 'hello world';
        //     fs.chmod(dir, '777', function (_, t) {

        //     });
        //     nodegit.Repository.init(os.homedir() + '/' + dir, isBare).then(function (repo) {

        //         nodegit.Repository.open(path.resolve(os.homedir(), dir))
        //             .then(function (repoResult) {
        //                 repo = repoResult;
        //                 return fse.ensureDir(path.join(repo.workdir(), dir));
        //             })
        //             .then(function () {
        //                 return fse.writeFile(path.join(repo.workdir(), fileName), fileContent);
        //             })
        //             .then(function () {
        //                 return fse.writeFile(
        //                     path.join(repo.workdir(), dir, fileName),
        //                     fileContent
        //                 );
        //             })
        //             .then(function () {
        //                 return repo.refreshIndex();
        //             })
        //             .then(function (indexResult) {
        //                 index = indexResult;
        //             })
        //             .then(function () {
        //                 return index.addByPath(fileName);
        //             })
        //             .then(function () {
        //                 return index.addByPath(path.join(dir, fileName));
        //             })
        //             .then(function () {

        //                 return index.write();
        //             })
        //             .then(function () {
        //                 return index.writeTree();
        //             })
        //             .then(function (oidResult) {
        //                 oid = oidResult;
        //                 return nodegit.Reference.nameToId(repo, 'HEAD');
        //             })
        //             .then(function (head) {
        //                 return repo.getCommit(head);
        //             })
        //             .then(function (parent) {
        //                 var author = nodegit.Signature.create('richie',
        //                     'beastar457@gmail.com', 123456789, 60);
        //                 var committer = nodegit.Signature.create('richie',
        //                     'beastar457@gmail.com', 987654321, 90);
        //                 return repo.createCommit('HEAD', author, committer, 'message', oid, [parent]);
        //             })
        //             .done(function (commitId) {
        //                 console.log('New Commit: ', commitId);
        //             });
        //     })
        //         .catch(function (reasonForFailure) {
        //             console.log(reasonForFailure);
        //         });
        // }

    }
}
