var execute = (controller) =>{
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
        //TODO @質問者にするかどうかは要検討
        controller.storage.users.get(message.user, function(err, user) {
            //requestOption
            //var options = {
            //    url : 'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040',
            //    method : 'GET',
            //    header: headers,
            //    json : true,
            //}
            //execute
            //request(options, function (error, response, body) {
            //     console.log(response);
            //     //bot.reply(message,response);
            //})
        bot.reply(message, uri);
        });
    });
}

module.exports = {
    execute : execute
}