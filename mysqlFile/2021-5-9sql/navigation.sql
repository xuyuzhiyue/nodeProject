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

 Date: 09/05/2021 23:14:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for navigation
-- ----------------------------
DROP TABLE IF EXISTS `navigation`;
CREATE TABLE `navigation`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image_src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `open_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `navigator_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isdel` int(255) NULL DEFAULT 0,
  `shopName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of navigation
-- ----------------------------
INSERT INTO `navigation` VALUES (1, '分类', 'http://127.0.0.1:8800/navigation/icon_index_nav1', 'switchTab', '/pages/category/main', 0, '等等');
INSERT INTO `navigation` VALUES (2, '秒杀拍', 'http://127.0.0.1:8800/navigation/icon_index_nav2', 'switchTab', '/pages/category/main', 0, '等等');
INSERT INTO `navigation` VALUES (3, '超市购', 'http://127.0.0.1:8800/navigation/icon_index_nav3', 'switchTab', '/pages/category/main', 0, '等等');
INSERT INTO `navigation` VALUES (4, '母婴品', 'http://127.0.0.1:8800/navigation/icon_index_nav4', 'switchTab', '/pages/category/main', 0, '等等');

SET FOREIGN_KEY_CHECKS = 1;
