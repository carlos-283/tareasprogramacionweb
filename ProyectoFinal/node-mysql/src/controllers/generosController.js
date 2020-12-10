const connection = require('../config/connection');

function listar(req, res) {
    if (connection) {
        let sql = 'select * from generos';
        connection.query(sql, (err, generos) => {
            if (err) {
                res.json(err);
            } else {
                res.json(generos);
            }
        })
    }
}

function obtenerGenero(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = `select * from generos where id= ${connection.escape(id)}`;
        connection.query(sql, (err, genero) => {
            if (err) {
                res.json(err)
            } else {
                let mensaje = "";
                if (genero === undefined || genero.length === 0)
                    mensaje = "genero no encontrada"

                res.json({ error: false, data: genero, mensaje: mensaje })
            }
        })
    }
}

function crear(req, res) {
    if (connection) {
        const genero = req.body;
        // if (!genero.titulo)
        //     return res.status(400).send({ error: true, mensaje: "El titulo es obligatorio" })

        // if (genero.titulo.length > 120)
        //     return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

        // if (!genero.director)
        //     return res.status(400).send({ error: true, mensaje: "El nombre del director es obligatorio" })

        // if (genero.director.length > 100)
        //     return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

        // if (!genero.año)
        //     return res.status(400).send({ error: true, mensaje: "El año de la pelicula es obligatorio" })

        // if (!genero.año.length !== 4)
        //     return res.status(400).send({ error: true, mensaje: "El año debe tener 4 digitos" })

        let sql = 'INSERT INTO generos set ?';
        connection.query(sql, [genero], (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ error: false, data: rows, mensaje: "Genero creada con exito" })
            }
        })
    }
}

function editar(req, res) {
    if (connection) {
        const { id } = req.params;
        const genero = req.body;

        // if (!genero.titulo)
        //     return res.status(400).send({ error: true, mensaje: "El titulo es obligatorio" })

        // if (genero.titulo.length > 120)
        //     return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

        // if (!genero.director)
        //     return res.status(400).send({ error: true, mensaje: "El nombre del director es obligatorio" })

        // if (genero.director.length > 100)
        //     return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

        // if (!genero.año)
        //     return res.status(400).send({ error: true, mensaje: "El año de la pelicula es obligatorio" })

        // if (!genero.año.length !== 4)
        //     return res.status(400).send({ error: true, mensaje: "El año debe tener 4 digitos" })


        let sql = 'UPDATE generos set ? WHERE id = ?';
        connection.query(sql, [genero, id], (err, rows) => {
            if (err) {
                res.json(err)
            } else {

                let mensaje = "";
                if (rows.changedRows === 0)
                    mensaje = "La información es la misma"
                else
                    mensaje = "Genero modificado con exito"

                res.json({ error: false, data: rows, mensaje: mensaje })
            }
        })
    }
}

function eliminar(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = 'DELETE FROM generos WHERE id= ?';
        connection.query(sql, [id], (err, rows) => {
            if (err) {
                let error = err;
                if (err.code = 'ER_ROW_IS_REFERENCED_2') {
                    error = "No se puede borrar el genero, esta asociado a una pelicula";
                }
                console.log(error);
                res.json({ error: true, data: [], mensaje: error })
            } else {

                let mensaje = "";
                if (rows.affectedRows === 0) {
                    mensaje = "Genero no encontrada"
                } else {
                    mensaje = "Genero eliminada con exito"
                }

                res.json({ error: false, data: rows, mensaje })
            }
        })
    }
}

module.exports = {
    listar,
    obtenerGenero,
    crear,
    editar,
    eliminar
}