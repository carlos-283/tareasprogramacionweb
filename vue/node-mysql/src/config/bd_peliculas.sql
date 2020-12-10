/*
 Navicat Premium Data Transfer

 Source Server         : Programacion
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:8889
 Source Schema         : bd_peliculas

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 09/12/2020 23:17:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for generos
-- ----------------------------
DROP TABLE IF EXISTS `generos`;
CREATE TABLE `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genero` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of generos
-- ----------------------------
BEGIN;
INSERT INTO `generos` VALUES (5, 'drama');
INSERT INTO `generos` VALUES (8, 'mmm');
COMMIT;

-- ----------------------------
-- Table structure for peliculas
-- ----------------------------
DROP TABLE IF EXISTS `peliculas`;
CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(120) NOT NULL,
  `director` varchar(100) NOT NULL,
  `año` char(4) NOT NULL,
  `genero_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_nombre` (`genero_id`),
  CONSTRAINT `fk_nombre` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of peliculas
-- ----------------------------
BEGIN;
INSERT INTO `peliculas` VALUES (1, 'pulp fiction', 'quentin tarantino', '1999', 5);
INSERT INTO `peliculas` VALUES (4, 'clerks', 'kevin smith', '1999', 8);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
