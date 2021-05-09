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

 Date: 09/05/2021 23:13:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for gouwuche
-- ----------------------------
DROP TABLE IF EXISTS `gouwuche`;
CREATE TABLE `gouwuche`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pics_mid3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pics_mid2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pics_mid1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goods_price` int(10) NULL DEFAULT NULL,
  `goods_small_logo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shopName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `num` int(11) NULL DEFAULT NULL,
  `checked` tinyint(1) NULL DEFAULT NULL,
  `orderDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `orderDatess` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gouwuche
-- ----------------------------
INSERT INTO `gouwuche` VALUES (37, 602, '名侦探柯楠手办', 'https://img13.360buyimg.com/n7/jfs/t1/140398/3/2521/244130/5f0569d0E3897fb91/ed26efbc8d524b71.jpg', 'https://img10.360buyimg.com/n7/jfs/t1/92514/26/9351/160545/5e0eab9bEbc716a94/e5f2425af1ecdd25.jpg', 'https://img11.360buyimg.com/n7/jfs/t1/104937/21/6123/73473/5df0f45eE51f16253/7d29a12af595a910.jpg', 8855, 'https://img13.360buyimg.com/n7/jfs/t1/123058/12/3487/415889/5ed21eacEef310112/1d3749eb2fcd4dc5.jpg', '等等', '6.2', 1, 1, '1620571853030', '2021-05-09 22:50:53');

SET FOREIGN_KEY_CHECKS = 1;
