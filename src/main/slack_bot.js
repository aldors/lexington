var request = require('request');

var headers = {
    'Content-Type':'application/json'
}

//Botkit.jsの場所
var Botkit = require('../../node_modules/botkit/lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

//tokenを定義
var bot = controller.spawn({
    token: process.env.token
}).startRTM();


//qiitaURL
controller.hears(['qiita (.*)','q (.*)'], 'ambient', function(bot, message) {
    var keywords = message.match[1].split(' ');
    var keyword = '';
    for(let i = 0;i < keywords.length;i++){
        if(i != 0){
            keyword += '+';
        }
        keyword += keywords[i];
    }
    var uri = 'https://qiita.com/search?q=' + keyword;
    //検索urlをslackへ投げる
    //TODO @質問者にするかどうか
    controller.storage.users.get(message.user, function(err, user) {
        //requestを投げる為のoption
        //var options = {
        //    url : 'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040',
        //    method : 'GET',
        //    header: headers,
        //    json : true,
        //}
        //リクエスト送信
        //request(options, function (error, response, body) {
        //     //コールバックで色々な処理
        //     console.log(response);
        //     //bot.reply(message,response);
        //})
	bot.reply(message, uri);
    });
});
