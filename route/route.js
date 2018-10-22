var express = require('express');
var router = express.Router();

//top画面
router.get("/", function (req, res, next) {
    res.redirect(302, "/top");
});

router.get("/top", function (req, res, next) {
    res.render("top/top", {});
});

var login = require('./login');
var viewer = require('./viewer');

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