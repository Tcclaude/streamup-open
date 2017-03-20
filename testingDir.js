//assumming the final path of folder v is like the bellow
var dir='name/bn/nnn/v';
console.log(dir.split('/'));
dir.split('/').forEach(function(e) {
    console.log(e);
}, this);
//git folders ids(online) and save them in sqlite3 db
