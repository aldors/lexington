const { Pool,Client } = require('pg');

 // 接続情報定義 
const client = new Client({
    host: process.env.POSTGRE_SQL_HOST,
    database: process.env.POSTGRE_SQL_DATABASE,
    user: process.env.POSTGRE_SQL_USER,
    password: process.env.POSTGRE_SQL_PASSWORD,
    port: 5432,
    ssl:true
});

//DB接続
client.connect();

const select = function(query){
    client.query(query)
    .then(result => {
        client.end();
        return result;
    })
    .catch(e => {
        console.error(e.stack);
        client.end();
    });
}

module.exports.select = select;
