const mysql = require('mysql');

const objetConnection = {
    "host": "localhost",
    "port": 8889,
    "user": "root",
    "password": "root",
    "database": "crud_node2"
}

const myConn = mysql.createConnection(objetConnection);

myConn.connect((err) => {
    if (err) {
        console.log("Ha ocurrido un error", err);
    } else {
        console.log("Base de datos conectada");
    }
});

module.exports = myConn;