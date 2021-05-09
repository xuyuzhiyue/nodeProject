/*
 Navicat Premium Data Transfer

 Source Server         : stuNode
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost:3306
 Source Schema         : mydb

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : 65001

 Date: 09/05/2021 23:13:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for manageuser
-- ----------------------------
DROP TABLE IF EXISTS `manageuser`;
CREATE TABLE `manageuser`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userPassword` int(255) NULL DEFAULT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isdel` int(255) NULL DEFAULT 0,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of manageuser
-- ----------------------------
INSERT INTO `manageuser` VALUES (1, 12345678, 'admin', 0, '张三', 'image1.jpg');
INSERT INTO `manageuser` VALUES (2, 123456, 'user', 0, '小呆', '83c496e73ba17680d3d07f94e727a510mark2.png');

SET FOREIGN_KEY_CHECKS = 1;
