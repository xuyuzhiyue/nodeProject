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

 Date: 09/05/2021 23:13:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`  (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `image_src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goodsType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cat_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shopName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`goods_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 600 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES (592, 'https://img13.360buyimg.com/n1/s200x200_jfs/t1/73508/10/11116/308493/5d89db36E37c5353f/9d14e7ed8bf5628a.jpg', '中国图书', '图书', '游中国', '哈哈');
INSERT INTO `books` VALUES (593, 'https://img14.360buyimg.com/n1/s200x200_jfs/t1/136169/27/1231/131467/5ed70be7E8b53565d/7004353fe83a8a3a.jpg', '中国图书', '图书', '中国简书', '哈哈');
INSERT INTO `books` VALUES (594, 'https://img12.360buyimg.com/n1/s200x200_jfs/t1/84767/8/431/433978/5dad4281E4587c25d/39975d20ebc1dd6c.jpg', '中国图书', '图书', '宋朝图书', '哈哈');
INSERT INTO `books` VALUES (595, 'https://img14.360buyimg.com/n1/s200x200_jfs/t976/128/738317813/593432/47ea30be/554c69f6N7ead339f.jpg', '中国图书', '图书', '唐朝图书', '哈哈');
INSERT INTO `books` VALUES (596, 'https://img10.360buyimg.com/n1/s200x200_jfs/t1/117580/15/9108/133393/5ed70be2E9b74f61a/501e6bcf58e0ddd6.jpg', '中国图书', '图书', '明朝图书', '哈哈');
INSERT INTO `books` VALUES (597, 'https://img13.360buyimg.com/n1/s200x200_jfs/t1/64693/19/13607/469321/5dad43c0Eca1ae792/6818d1ec9f487b11.jpg', '中国图书', '图书', '清朝图书', '哈哈');
INSERT INTO `books` VALUES (598, 'https://img13.360buyimg.com/n1/s200x200_jfs/t1/93949/4/15647/404386/5e7337aaEcc2ace98/2dd14dda2bc94cdd.jpg', '中国图书', '图书', '春秋图书', '哈哈');
INSERT INTO `books` VALUES (599, 'https://img11.360buyimg.com/n1/s200x200_jfs/t1/127812/33/7845/171598/5f1aad4dE50b7ee1e/0d44e30c5127961e.jpg', '中国图书', '图书', '秦朝图书', '哈哈');

SET FOREIGN_KEY_CHECKS = 1;
