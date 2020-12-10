/*
 Navicat Premium Data Transfer

 Source Server         : Connection
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:8889
 Source Schema         : bd_peliculas

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 10/12/2020 01:30:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for generos
-- ----------------------------
DROP TABLE IF EXISTS `generos`;
CREATE TABLE `generos`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genero` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of generos
-- ----------------------------
INSERT INTO `generos` VALUES (11, 'GeneroPrueba');
INSERT INTO `generos` VALUES (12, 'Accion');
INSERT INTO `generos` VALUES (13, 'Drama');
INSERT INTO `generos` VALUES (14, 'Comedia');
INSERT INTO `generos` VALUES (16, 'Ciencia ficcion');

-- ----------------------------
-- Table structure for peliculas
-- ----------------------------
DROP TABLE IF EXISTS `peliculas`;
CREATE TABLE `peliculas`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `director` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `año` char(4) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `genero_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_nombre`(`genero_id`) USING BTREE,
  CONSTRAINT `fk_nombre` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of peliculas
-- ----------------------------
INSERT INTO `peliculas` VALUES (7, 'Prueba123', 'DirPrueba', '1999', 11);
INSERT INTO `peliculas` VALUES (9, 'Akira', 'chino Cochino', '1234', 16);

SET FOREIGN_KEY_CHECKS = 1;
