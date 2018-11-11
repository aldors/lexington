var express = require('express');
var router = express.Router();

const connection = require("../lib/db/postgreSQLConnection");

router.get("/viewer", function (req, res) {
    var sql = "select "
        + "chunithm_music_mst.music_name,"
        + "chunithm_music_mst.difficulty_level,"
        + "chunithm_music_mst.music_constant,"
        + "chunithm_play_record.score,"
        + "chunithm_play_record.max_combo_count "
        + "from chunithm_play_record "
        + "inner join chunithm_music_mst on chunithm_play_record.chunithm_music_id = chunithm_music_mst.chunithm_music_id"

    connection.select(sql, function (result) {
        res.render("viewer/viewer", { recordList: result.rows });
    });
});

module.exports = router;