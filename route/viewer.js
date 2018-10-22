var express = require('express');
var router = express.Router();

router.get("/viewer", function (req, res) {
    res.render("viewer/viewer", {});
});

module.exports = router;