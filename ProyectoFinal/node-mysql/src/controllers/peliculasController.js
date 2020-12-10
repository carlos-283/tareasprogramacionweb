const connection = require('../config/connection');

function listar(req, res) {
    if (connection) {
        let sql = 'select p.*,g.genero from peliculas p inner join generos g on p.genero_id=g.id';
        connection.query(sql, (err, peliculas) => {
            if (err) {
                res.json(err);
            } else {
                console.log(peliculas);
                res.json(peliculas);
            }
        })
    }
}

function obtenerPelicula(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = `select * from peliculas where id= ${connection.escape(id)}`;
        connection.query(sql, (err, pelicula) => {
            if (err) {
                res.json(err)
            } else {
                let mensaje = "";
                if (pelicula === undefined || pelicula.length === 0)
                    mensaje = "pelicula no encontrada"

                res.json({ error: false, data: pelicula, mensaje: mensaje })
            }
        })
    }
}



const pasoValidaciones = (pelicula, res) => {
    if (!pelicula.titulo)
        return res.status(400).send({ error: true, mensaje: "El titulo es obligatorio" })

    if (pelicula.titulo.length > 120)
        return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

    if (!pelicula.director)
        return res.status(400).send({ error: true, mensaje: "El nombre del director es obligatorio" })

    if (pelicula.director.length > 100)
        return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

    if (!pelicula.año)
        return res.status(400).send({ error: true, mensaje: "El año de la pelicula es obligatorio" })

    if (!pelicula.año.length !== 4)
        return res.status(400).send({ error: true, mensaje: "El año debe tener 4 digitos" })

    return true
}

function crear(req, res) {
    if (connection) {
        const pelicula = req.body;

        if (!pelicula.titulo)
            return res.status(400).send({ error: true, mensaje: "El titulo es obligatorio" })

        if (pelicula.titulo.length > 120)
            return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

        if (!pelicula.director)
            return res.status(400).send({ error: true, mensaje: "El nombre del director es obligatorio" })

        if (pelicula.director.length > 100)
            return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

        if (!pelicula.año)
            return res.status(400).send({ error: true, mensaje: "El año de la pelicula es obligatorio" })


        if (pelicula.año.length !== 4)
            return res.status(400).send({ error: true, mensaje: "El año debe tener 4 digitos" })

        let sql = 'INSERT INTO peliculas set ?';
        connection.query(sql, [pelicula], (err, rows) => {
            if (err) {
                res.json(err);
            } else {
                res.json({ error: false, data: rows, mensaje: "Pelicula creada con exito" })
            }
        })
    }
}

function editar(req, res) {
    if (connection) {
        const { id } = req.params;
        const pelicula = req.body;


        if (!pelicula.titulo)
            return res.status(400).send({ error: true, mensaje: "El titulo es obligatorio" })

        if (pelicula.titulo.length > 120)
            return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

        if (!pelicula.director)
            return res.status(400).send({ error: true, mensaje: "El nombre del director es obligatorio" })

        if (pelicula.director.length > 100)
            return res.status(400).send({ error: true, mensaje: "El titulo de la pelicula no debe de sobrepasar los 120 caracteres" })

        if (!pelicula.año)
            return res.status(400).send({ error: true, mensaje: "El año de la pelicula es obligatorio" })


        if (pelicula.año.length !== 4)
            return res.status(400).send({ error: true, mensaje: "El año debe tener 4 digitos" })


        let sql = 'UPDATE peliculas set ? WHERE id = ?';
        connection.query(sql, [pelicula, id], (err, rows) => {
            if (err) {
                res.json(err)
            } else {

                let mensaje = "";
                if (rows.changedRows === 0)
                    mensaje = "La información es la misma"
                else
                    mensaje = "Pelicula modificada con exito"

                res.json({ error: false, data: rows, mensaje: mensaje })
            }
        })
    }
}

function eliminar(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = 'DELETE FROM peliculas WHERE id=' + id;
        console.log(sql);
        connection.query(sql, [id], (err, rows) => {
            if (err) {
                console.log(err);
                res.json(err)
            } else {

                let mensaje = "";
                if (rows.affectedRows === 0) {
                    mensaje = "Pelicula no encontrada"
                } else {
                    mensaje = "Pelicula eliminada con exito"
                }

                res.json({ error: false, data: rows, mensaje })
            }
        })
    }
}

module.exports = {
    listar,
    obtenerPelicula,
    crear,
    editar,
    eliminar
}