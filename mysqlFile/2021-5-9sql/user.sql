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

 Date: 09/05/2021 23:15:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(10) NULL DEFAULT NULL,
  `isdel` tinyint(255) NULL DEFAULT 0,
  `ctime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'zhansan', 18, 1, '2020-10-10');
INSERT INTO `user` VALUES (2, 'lisi', 20, 1, '2020-12-9');
INSERT INTO `user` VALUES (3, '王五11', 888, 0, '2020-12-09 18:25:11');
INSERT INTO `user` VALUES (4, '77', 33, 1, '2020-12-09 18:52:52');
INSERT INTO `user` VALUES (7, '老刘', 10, 0, '2020-12-09 20:49:47');
INSERT INTO `user` VALUES (8, 'admin', 18, 0, '2020-12-09 22:03:15');
INSERT INTO `user` VALUES (9, 'DW', 2020, 0, '2020-12-10 15:44:02');
INSERT INTO `user` VALUES (11, '哈哈哈', 101, 0, '2020-12-13 19:33:38');
INSERT INTO `user` VALUES (12, '哈哈哈1', 101, 0, '2020-12-13 19:34:08');
INSERT INTO `user` VALUES (13, '哈哈哈', 33, 0, '2020-12-23 23:37:59');

SET FOREIGN_KEY_CHECKS = 1;
