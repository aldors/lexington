//FIXME 各環境ごとに設定を切り替えられるようにする
//---------------------- ライブラリ読込 ----------------------
var express = require("express");
var app = express();
const connection = require("./lib/db/postgreSQLConnection");
//---------------------- ライブラリ読込 ----------------------

//---------------------- ミドルウェア構成 ----------------------
//静的ファイル
//※js,css等の静的ファイルは、static配下を参照するように設定すること
app.use('/static/js', express.static(__dirname + '/static/js'));
app.use('/static/js', express.static(__dirname + '/node_modules/bootstrap-honoka/dist/js'));
app.use('/static/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/static/css', express.static(__dirname + '/static/css'));
app.use('/static/css', express.static(__dirname + '/node_modules/bootstrap-honoka/dist/css'));
app.use('/static/image', express.static(__dirname + '/static/image'));
//json
app.use(require('body-parser')());
//route
app.use("/", require("./route/route"));
//---------------------- ミドルウェア構成 ----------------------

//---------------------- 各種の設定情報 ----------------------
//post
app.set('port', (process.env.PORT || 3000));
//EJS
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
//---------------------- 各種の設定情報 ----------------------

//---------------------- サーバー構築 ----------------------
var server = app.listen(app.get('port'), function () {
    console.log("Node.js is listening to PORT:" + server.address().port);
});
//---------------------- サーバー構築 ----------------------