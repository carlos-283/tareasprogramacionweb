const connection = require('../config/connection');

const listar =
    (req, res) => {
        if (connection) {
            let sql = ("select * from personas");
            connection.query(sql, (err, personas) => {
                if (err)
                    return res.json(err);
                console.log(personas);
                return res.json(personas);


            });
        }

    }

const obtenerPersona =
    (req, res) => {
        if (connection) {
            const { id } = req.params;
            let sql = ("select * from personas where id=" + connection.escape(id) + "");
            console.log(sql);
            connection.query(sql, (err, persona) => {
                if (err)
                    return res.json(err);
                console.log(persona);
                return res.json({ error: false, data: persona, mensaje: "persona obtenida exitosamente" });
            });
        }

    }


const crear =
    (req, res) => {
        if (connection) {
            const persona = req.body;
            let sql = ("insert into personas set ?");
            console.log(sql);
            connection.query(sql, [persona], (err, req) => {





                if (err)
                    return res.json(err);


                if (!persona.nombre)
                    return res.status(400).send({ error: false, data: persona, mensaje: "persona no puede carcer de nombre" });


                if (persona.telefono && persona.telefono.length !== 10)
                    return res.status(400).send({
                        error: false, data: persona, mensaje: 'la longitud del telefono es incorrecta '
                    });



                console.log(persona);
                return res.json({ error: false, data: persona, mensaje: "persona creada exitosamente" });
            });
        }

    }



const editar =
    (req, res) => {
        if (connection) {
            const { id } = req.params;
            const persona = req.body;
            let sql = ("update personas set ? where id = ?");
            console.log(sql);
            connection.query(sql, [persona, id], (err, req) => {
                if (err)
                    return res.json(err);
                console.log(persona);
                return res.json({ error: false, data: persona, mensaje: "persona editada exitosamente" });
            });
        }

    }

const eliminar =
    (req, res) => {
        if (connection) {
            const { id } = req.params;
            let sql = ("delete from personas where id = ?");
            connection.query(sql, [id], (err, rows) => {
                if (err)
                    return res.json(err);
                console.log(id);
                return res.json({ error: false, data: id, mensaje: rows.affectedRows > 0 ? "persona eliminada exitosamente" : "Persona no encontrada" });
            });
        }

    }
module.exports = { listar, obtenerPersona, crear, editar, eliminar }