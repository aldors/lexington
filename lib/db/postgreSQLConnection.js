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

module.exports = client;