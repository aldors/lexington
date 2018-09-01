//FIXME 各環境ごとに設定を切り替えられるようにする
var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 3000));

//静的ファイル設定
app.use(express.static(__dirname + '/static'));
//post設定
app.use(require('body-parser')());

//EJS設定
app.set( 'views', __dirname + '/view' );
app.set('view engine', 'ejs');

//ポート設定
var server = app.listen(app.get('port'), function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

//ログイン画面
app.get("/login", function(req, res, next){
    res.render("login/login", {});
});

app.post("/login/auth",function(req, res){
    console.log(req.body.user);
    res.render("login/login", {});
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