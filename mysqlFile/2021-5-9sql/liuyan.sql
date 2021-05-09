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

 Date: 09/05/2021 23:13:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for liuyan
-- ----------------------------
DROP TABLE IF EXISTS `liuyan`;
CREATE TABLE `liuyan`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isdel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of liuyan
-- ----------------------------
INSERT INTO `liuyan` VALUES (1, '78b7faacf459cdee252dda67b0c86eacwxb8dd186c7247d75f.o6zAJs3TrloUclyADqGhOftWo2qo.9qnVSdGT9Tha71b754c25bcd2a6ec0e1e709b64f1b36.jpg', 'aaa', '1', '6.2', '其他问题、undefined、undefined、undefined');
INSERT INTO `liuyan` VALUES (2, 'd99ed0555ed53633da8d50ca2a640c74wxb8dd186c7247d75f.o6zAJs3TrloUclyADqGhOftWo2qo.jqSiErWJvijlb23212af505cd460746f072cb6bd9556.jpg', 'aaa', '0', '6.2', '商品问题、退款问题、其他问题、undefined');
INSERT INTO `liuyan` VALUES (3, '31899079d05317d9c942166405d52c49wxb8dd186c7247d75f.o6zAJs3TrloUclyADqGhOftWo2qo.kDfHvwo19phx0660b7dd08106902a66a3302a91e9ced.jpg', '很好', '0', '6.2', '页面问题');
INSERT INTO `liuyan` VALUES (4, '5e7aa054c3eec3b899fbfc6494a15214wxb8dd186c7247d75f.o6zAJs3TrloUclyADqGhOftWo2qo.yuxafxxQJtvP71b754c25bcd2a6ec0e1e709b64f1b36.jpg', '呵呵呵', '0', '6.3', '商品问题、退款问题、其他问题、undefined');

SET FOREIGN_KEY_CHECKS = 1;
