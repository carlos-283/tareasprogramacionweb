const connection = require('../config/connection');

function obtenerTodas(req, res) {
    if (connection) {
        connection.query('select * from tareas', (err, tareas) => {
            if (err) {
                res.json(err);
            } else {
                res.json(tareas);
            }
        })
    }
}

function obtenerTarea(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = `select * from tareas where id= ${connection.escape(id)}`;
        connection.query(sql, (err, tarea) => {
            if (err) {
                res.json(err)
            } else {
                let mensaje = "";
                if (tarea === undefined || tarea.length === 0)
                    mensaje = "tarea no encontrada"

                res.json({ error: false, data: tarea, mensaje: mensaje })
            }
        })
    }
}

function eliminar(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = 'DELETE FROM tareas WHERE id= ?';
        connection.query(sql, [id], (err, rows) => {
            if (err) {
                res.json(err)
            } else {

                let mensaje = "";
                if (rows.affectedRows === 0) {
                    mensaje = "tarea no encontrada"
                } else {
                    mensaje = "tarea eliminada con exito"
                }

                res.json({ error: false, data: rows, mensaje })
            }
        })
    }
}

module.exports = {
    obtenerTodas,
    obtenerTarea,
    eliminar
}