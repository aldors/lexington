var express = require('express');
var router = express.Router();

//top画面
router.get("/", function (req, res, next) {
    res.redirect(302, "/top");
});

router.get("/top", function (req, res, next) {
    res.render("top/top", {});
});

//------------ ルーター・モジュール -------------
//route.jsは基本的にエラーハンドリング等の共通機能のみ
//FIXME jsの単位を画面単位にする?
router.use('/', require('./login'));
router.use('/', require('./viewer'));
//------------ ルーター・モジュール -------------

//------------ 404NotFound -------------
router.use(function (req, res, next) {
    res.status(404);
    res.render("error/notFound", {});
});
//------------ 404NotFound -------------

//------------ 500InternalServerError -------------
router.use(function (err, req, res, next) {
    res.status(500);
    res.end('my 500 error! : ' + err);
});
//------------ 500InternalServerError -------------

module.exports = router;