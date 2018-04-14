var request = require('request');

var headers = {
    'Content-Type':'application/json'
}

//Botkit.js�̏ꏊ
var Botkit = require('../../node_modules/botkit/lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

//token���`
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
    //����url��slack�֓�����
    //TODO @����҂ɂ��邩�ǂ���
    controller.storage.users.get(message.user, function(err, user) {
        //request�𓊂���ׂ�option
        //var options = {
        //    url : 'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040',
        //    method : 'GET',
        //    header: headers,
        //    json : true,
        //}
        //���N�G�X�g���M
        //request(options, function (error, response, body) {
        //     //�R�[���o�b�N�ŐF�X�ȏ���
        //     console.log(response);
        //     //bot.reply(message,response);
        //})
	bot.reply(message, uri);
    });
});
