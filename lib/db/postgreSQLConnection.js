const { Pool, Client } = require('pg');

// 接続情報定義 
const client = new Client({
    host: process.env.POSTGRE_SQL_HOST || 'localhost',
    database: process.env.POSTGRE_SQL_DATABASE || 'postgres',
    user: process.env.POSTGRE_SQL_USER || 'postgres',
    //開発環境のパスワードを設定(ローカルで実行する場合は、sslはコメントアウトする)
    password: process.env.POSTGRE_SQL_PASSWORD || 'XXXXXX',
    port: 5432,
    //ssl: true
});

//DB接続
client.connect();


const select = function (query, callback) {
    client.query(query, (err, res) => {
        //console.log(err, res)
        //console.log(res.rows[0])
        //client.end()
        callback(res);
    })
    // return client.query(query)
    //     .then(result => {
    //         console.log(result.rows[0])
    //     })
    //     .catch(e => {
    //         console.error(e.stack);
    //     })
    //     .then(() => client.end());
}

module.exports.select = select;
