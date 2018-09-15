//FIXME 各環境ごとに設定を切り替えられるようにする
var express = require("express");
var app = express();
const connection = require("./lib/db/postgreSQLConnection");

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
//---------------------- ミドルウェア構成 ----------------------

//---------------------- 各種の設定情報 ----------------------
//post
app.set('port', (process.env.PORT || 3000));
//EJS
app.set( 'views', __dirname + '/view' );
app.set('view engine', 'ejs');
//---------------------- 各種の設定情報 ----------------------

//---------------------- サーバー構築 ----------------------
var server = app.listen(app.get('port'), function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});
//---------------------- サーバー構築 ----------------------

app.get("/", function(req, res, next){
    res.render("index/index", {});
});

//ログイン画面
app.get("/login", function(req, res, next){
    res.render("login/login", {});
});

app.post("/login/auth",function(req, res){

    //FIXME ログインの認証機能についてはpassportを使用する
    console.log(req.body.user);

    // connection.query('select * from test')
    // .then(result => {
    //   console.log(result.rows[0])
    //   connection.end()
    // })
    // .catch(e => {
    //   console.error(e.stack)
    //   connection.end()
    // });

    res.render("viewer/viewer", {});
});

//404NotFound
app.use(function(req, res, next){
	res.status(404);
    res.render("error/notFound", {});
});

//500InternalServerError
app.use(function(err, req, res, next){
	res.status(500);
	res.end('my 500 error! : ' + err);
});