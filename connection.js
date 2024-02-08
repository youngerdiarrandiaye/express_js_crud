const mysql = require('mysql2');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'node_crud'
})
mysqlConnection.connect((err) =>{
if(err) {
    console.log('eroor in DB connection : '+JSON.stringify(err,undefined,2));
}else {
    console.log('connection established');
}
})

module.exports=mysqlConnection