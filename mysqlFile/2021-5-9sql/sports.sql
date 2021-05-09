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

 Date: 09/05/2021 23:15:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sports
-- ----------------------------
DROP TABLE IF EXISTS `sports`;
CREATE TABLE `sports`  (
  `goods_id` int(255) NOT NULL AUTO_INCREMENT,
  `goods_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image_src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cat_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shopName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`goods_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 614 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sports
-- ----------------------------
INSERT INTO `sports` VALUES (608, '体育用品', 'https://img14.360buyimg.com/n7/jfs/t1/117966/24/11592/74294/5effd96eE0cc4b629/2f1150275abcce0d.jpg', '体育', '羽毛球拍', '等等');
INSERT INTO `sports` VALUES (609, '体育用品', 'https://img12.360buyimg.com/n7/jfs/t1/61260/34/2154/1065873/5d07ace0E75826e3c/032ba7f803b107ca.jpg', '体育', '篮球', '等等');
INSERT INTO `sports` VALUES (610, '体育用品', 'https://img10.360buyimg.com/n7/jfs/t1/106764/35/9953/649275/5e145379E134a6f9f/9bad5857e84d1ad8.jpg', '体育', '足球', '等等');
INSERT INTO `sports` VALUES (611, '体育用品', 'https://img10.360buyimg.com/n7/jfs/t493/221/135501307/78147/c78c3aeb/5451d0e6N85492051.jpg', '体育', '网球', '等等');
INSERT INTO `sports` VALUES (612, '体育用品', 'https://img11.360buyimg.com/n7/jfs/t1/116920/20/3485/508185/5ea8da53Eddd14ef0/b4ef0a551ba3451f.jpg', '体育', '乒乓球', '等等');
INSERT INTO `sports` VALUES (613, '体育用品', 'https://img10.360buyimg.com/n7/jfs/t1/108716/40/8439/230786/5e6876baE3bcf78f2/6e6c82e87997d392.jpg', '体育', '高尔夫球', '等等');

SET FOREIGN_KEY_CHECKS = 1;
