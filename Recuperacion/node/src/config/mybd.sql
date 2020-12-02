create database examen;

use examen;

create table tareas (
	id INT NOT NULL auto_increment,
    nombre varchar(60) NOT NULL,
    descripcion varchar(150) NULL,
    encargado varchar(100) not null,
    primary key(id)
);

