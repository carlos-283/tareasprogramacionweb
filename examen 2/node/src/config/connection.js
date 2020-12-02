const mysql = require('mysql');

const objectConnection = {
    "host": "localhost",
    "port": "8889",
    "user": "root",
    "password": "root",
    "database": "bdCrud"
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect(
    (err) => err ? console.log("Ha ocurrido un error", err) : console.log("Base de datos conectada")
)

module.exports = myConn;