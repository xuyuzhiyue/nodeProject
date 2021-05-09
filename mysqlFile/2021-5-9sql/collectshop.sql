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

 Date: 09/05/2021 23:13:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for collectshop
-- ----------------------------
DROP TABLE IF EXISTS `collectshop`;
CREATE TABLE `collectshop`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pics_mid3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pics_mid2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pics_mid1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goods_price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goods_small_logo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shopName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isdel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 67 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of collectshop
-- ----------------------------
INSERT INTO `collectshop` VALUES (55, 614, '飞利浦(PHILIPS) 电动牙刷 净齿呵护型 成人声波震动牙刷 2种洁齿强度可选 力度感应 粉色 HX6806/02', 'undefined', 'undefined', 'undefined', '1020', 'https://img10.360buyimg.com/n7/jfs/t1/108716/40/8439/230786/5e6876baE3bcf78f2/6e6c82e87997d392.jpg', '啊啊', '6.2', '0');
INSERT INTO `collectshop` VALUES (58, 1, '海信(Hisense)LED55MU9600X3DUC 55英寸 4K超高清量子点电视 ULED画质 VIDAA系统', 'http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000150071083_3_400x400.jpg', 'http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000150071083_2_400x400.jpg', 'http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000150071083_1_400x400.jpg', '13999', 'http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg', '哈哈', '6.2', '0');
INSERT INTO `collectshop` VALUES (60, 609, '篮球', 'https://img11.360buyimg.com/n7/jfs/t1/137213/29/15722/114677/5fae76faEe2deaa40/e7ae807322dd7163.jpg', 'https://img10.360buyimg.com/n7/jfs/t1/104847/6/13575/170598/5e5caa74Ea6cb3c44/42cfec55a9a2c73b.jpg', 'https://img11.360buyimg.com/n7/jfs/t1/133235/18/8084/203142/5f43f17dE38440245/871d7dc9f2726d5d.jpg', '109', 'https://img12.360buyimg.com/n7/jfs/t1/61260/34/2154/1065873/5d07ace0E75826e3c/032ba7f803b107ca.jpg', '等等', '6.2', '0');
INSERT INTO `collectshop` VALUES (65, 612, '乒乓球', 'https://img11.360buyimg.com/n7/jfs/t1/88475/28/17095/101731/5e82a8beEbb61217f/65f3636d2347c308.jpg', 'https://img14.360buyimg.com/n7/jfs/t1/75600/33/10526/129851/5d8099edE5d8dbb5b/7428741cf0a21441.jpg', 'https://img10.360buyimg.com/n7/jfs/t1/109547/30/10161/237368/5e7c116fE3e316d8e/304fb8e5cad1f863.jpg', '109', 'https://img11.360buyimg.com/n7/jfs/t1/116920/20/3485/508185/5ea8da53Eddd14ef0/b4ef0a551ba3451f.jpg', '等等', '6.2', '0');

SET FOREIGN_KEY_CHECKS = 1;
