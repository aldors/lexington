var express = require('express');
var router = express.Router();

//ログイン画面
router.get("/", function (req, res, next) {
    res.redirect(302, "/login");
});
router.get("/login", function (req, res, next) {
    res.render("login/login", {});
});

//ログイン認証
router.post("/login/auth", function (req, res) {
    //FIXME ログインの認証機能についてはpassportを使用する
    console.log(req.body.email);
    res.redirect(302, "/viewer");
});

//メインページ
router.get("/viewer", function (req, res) {
    res.render("viewer/viewer", {});
});

//404NotFound
router.use(function (req, res, next) {
    res.status(404);
    res.render("error/notFound", {});
});

//500InternalServerError
router.use(function (err, req, res, next) {
    res.status(500);
    res.end('my 500 error! : ' + err);
});

module.exports = router;