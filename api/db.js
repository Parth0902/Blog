// here we are doing the connection of the server woth the mysql database
const Mysql=require('mysql')

const db=Mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234567",
    database:"blog"

})


// exporting the db module
module.exports=db;