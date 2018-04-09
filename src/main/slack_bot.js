/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           ______     ______     ______   __  __     __     ______
          /\  == \   /\  __ \   /\__  _\ /\ \/ /    /\ \   /\__  _\
          \ \  __<   \ \ \/\ \  \/_/\ \/ \ \  _"-.  \ \ \  \/_/\ \/
           \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\    \ \_\
            \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/     \/_/


This is a sample Slack bot built with Botkit.

This bot demonstrates many of the core features of Botkit:

* Connect to Slack using the real time API
* Receive messages based on "spoken" patterns
* Reply to messages
* Use the conversation system to ask questions
* Use the built in storage system to store and retrieve information
  for a user.

# RUN THE BOT:

  Get a Bot token from Slack:

    -> http://my.slack.com/services/new/bot

  Run your bot from the command line:

    token=<MY TOKEN> node slack_bot.js

# USE THE BOT:

  Find your bot inside Slack to send it a direct message.

  Say: "Hello"

  The bot will reply "Hello!"

  Say: "who are you?"

  The bot will tell you its name, where it is running, and for how long.

  Say: "Call me <nickname>"

  Tell the bot your nickname. Now you are friends.

  Say: "who am I?"

  The bot will tell you your nickname, if it knows one for you.

  Say: "shutdown"

  The bot will ask if you are sure, and then shut itself down.

  Make sure to invite your bot into other channels using /invite @<my bot>!

# EXTEND THE BOT:

  Botkit has many features for building cool and useful bots!

  Read all about it here:

    -> http://howdy.ai/botkit

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
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
        //    method : 'POST',
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
