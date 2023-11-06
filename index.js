const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database: "medical"
})
con.connect((err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});
con.query('select * from m_company', (err, result)=>{
    console.log(result);
});