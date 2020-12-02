create database crud_node2;

use crud_node2;

//Tabla 

create table personas (
	id INT NOT NULL auto_increment,
    nombre varchar(50) NOT NULL,
    direccion varchar(150),
    telefono varchar(10),
    primary key(id)
);