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

 Date: 09/05/2021 23:12:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (1, '广东省梅州市五华县', '6.2', '13267829933', '小戴');
INSERT INTO `address` VALUES (2, '广东省广州市', '哈哈', '13267829900', '小名');
INSERT INTO `address` VALUES (4, '北京市朝阳区', '6.2', '13267829944', '小哈');
INSERT INTO `address` VALUES (10, '广东省深圳市罗湖区济南校区', '6.2', '13267829966', '小的');
INSERT INTO `address` VALUES (22, '内蒙古自治区呼和浩特市新城区等等小区', '6.2', '13267829955', '嗯嗯');
INSERT INTO `address` VALUES (26, '广东省广州市海珠区新港中路397号', '6.2', '020-81167888', '张三');
INSERT INTO `address` VALUES (27, '广东省广州市海珠区新港中路397号', '6.2', '020-81167888', '张三');
INSERT INTO `address` VALUES (28, '广东省广州市海珠区新港中路397号', '6.2', '020-81167888', '张三');
INSERT INTO `address` VALUES (29, '广东省广州市海珠区新港中路397号', '6.2', '020-81167888', '张三');

SET FOREIGN_KEY_CHECKS = 1;
