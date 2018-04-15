var request = require('request');

var headers = {
    'Content-Type':'application/json'
}

//Botkit.js
var Botkit = require('../../node_modules/botkit/lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

//token
var bot = controller.spawn({
    token: process.env.token
}).startRTM();

//qiitaBotのモジュール
var qiitaBot = require('./qiita_bot');
qiitaBot.execute(controller);