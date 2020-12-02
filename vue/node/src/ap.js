const express = require('express');
//inst
const app = express();

//config
app.set(
    'port', 3000
)

//middlew
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
require('./config/connection');

//rutas
app.use(require('./routes/librosRoutes.js'))


//levantar serv
app.listen(
    app.get('port'), (error) => {
        error ? console.log("ha ocurrido error") :
            console.log("Servidor en puerto:", app.get('port'))
    }
)
    ;