var express = require('express');
var router = express.Router();

//ログイン画面
router.get("/login", function (req, res, next) {
    res.render("login/login", {});
});

//ログイン認証
router.post("/login/auth", function (req, res) {
    //FIXME ログインの認証機能についてはpassportを使用する
    console.log(req.body.user);
    res.redirect(302, "/viewer");
});

module.exports = router;