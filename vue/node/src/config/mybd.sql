create database bdCrud
use  bdCrud;
CREATE TABLE Libros (
  ID int  AUTO_INCREMENT,
  Titulo varchar(80) NOT NULL,
  Autor varchar(100) NOT NULL,
  NumeroPaginas varchar(4) DEFAULT NULL,
  AnoPublicacion varchar(4) DEFAULT NULL,
  PRIMARY KEY (ID)
) ;
INSERT INTO `Libros` VALUES (1, 'Game of thones', 'El diablo', '10', '10');


