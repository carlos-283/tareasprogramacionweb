const connection = require('../config/connection');

const obtenerLibros =
    (req, res) => {
        if (connection) {
            let sql = ("select * from libros");
            connection.query(sql, (err, libros) => {
                if (err)
                    return res.json(err);
                console.log(libros);
                return res.json(libros);

            });
        }

    }

// const obtenerPersona =
//     (req, res) => {
//         if (connection) {
//             const { id } = req.params;
//             let sql = ("select * from personas where id=" + connection.escape(id) + "");
//             console.log(sql);
//             connection.query(sql, (err, persona) => {
//                 if (err)
//                     return res.json(err);
//                 console.log(persona);
//                 return res.json({ error: false, data: persona, mensaje: "persona obtenida exitosamente" });
//             });
//         }

//     }


const crearLibro =
    (req, res) => {
        if (connection) {
            const libro = req.body;
            let sql = ("insert into libros set ?");
            console.log(sql);
            if (libro.AnoPublicacion.length != 4)
                return res.status(400).send({ error: true, data: {}, mensaje: "El año de publicacion tiene que contar exactamente con 4 digitos" });
            connection.query(sql, [libro], (err, req) => {
                if (err)
                    return res.status(400).send(err);
                return res.json({ error: false, data: libro, mensaje: "libro creado exitosamente" });
            });
        }

    }



// const editar =
//     (req, res) => {
//         if (connection) {
//             const { id } = req.params;
//             const persona = req.body;
//             let sql = ("update personas set ? where id = ?");
//             console.log(sql);
//             connection.query(sql, [persona, id], (err, req) => {
//                 if (err)
//                     return res.json(err);
//                 console.log(persona);
//                 return res.json({ error: false, data: persona, mensaje: "persona editada exitosamente" });
//             });
//         }

//     }

// const eliminar =
//     (req, res) => {
//         if (connection) {
//             const { id } = req.params;
//             let sql = ("delete from personas where id = ?");
//             connection.query(sql, [id], (err, rows) => {
//                 if (err)
//                     return res.json(err);
//                 console.log(id);
//                 return res.json({ error: false, data: id, mensaje: rows.affectedRows > 0 ? "persona eliminada exitosamente" : "Persona no encontrada" });
//             });
//         }

//     }

module.exports = {
    obtenerLibros,
    crearLibro,
    // obtenerPersona, 
    // crear, 
    // editar, 
    // eliminar 
}