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

 Date: 09/05/2021 23:14:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderIden` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `orderTime` datetime(0) NULL DEFAULT NULL,
  `orderPay` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `orderNumber` int(11) NULL DEFAULT NULL,
  `orderName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `orderImage` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isdel` int(255) NULL DEFAULT 0,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shopName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, '1616607483935', '2021-03-25 01:38:03', '22', 1, '游中国', 'https://img13.360buyimg.com/n1/s200x200_jfs/t29524/286/1623830899/611422/4b877c52/5ce5151cNfed4578c.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (10, '1616694954253', '2021-03-26 01:55:54', '109', 1, '羽毛球拍', 'https://img14.360buyimg.com/n7/jfs/t1/87896/35/4614/521961/5de77960E8c7c9c54/a62089ef34ef75b9.jpg', 1, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (11, '1616695164433', '2021-03-26 01:59:24', '109', 1, '篮球', 'https://img10.360buyimg.com/n7/jfs/t1/104847/6/13575/170598/5e5caa74Ea6cb3c44/42cfec55a9a2c73b.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (12, '1616695501038', '2021-03-26 02:05:01', '109', 1, '羽毛球拍', 'https://img14.360buyimg.com/n7/jfs/t1/87896/35/4614/521961/5de77960E8c7c9c54/a62089ef34ef75b9.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (13, '1616765978280', '2021-03-26 21:39:38', '109', 1, '网球', 'https://img10.360buyimg.com/n7/jfs/t18946/356/494995386/386926/f1049b14/5a90eea3Nd495fd11.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (14, '1616783416550', '2021-03-27 02:30:16', '55', 1, '阿凡提手办', 'https://img10.360buyimg.com/n7/jfs/t1/93789/10/18305/148095/5e9530e7E837902f6/7cc7145a21480c80.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (15, '1616783439504', '2021-03-27 02:30:39', '8855', 1, '海贼王手办', 'https://img12.360buyimg.com/n7/jfs/t1/78134/17/16003/162497/5dd932f6Ea3952bbe/323e89ad1893c0b4.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (16, '1616785962041', '2021-03-27 03:12:42', '109', 1, '羽毛球拍', 'https://img14.360buyimg.com/n7/jfs/t1/87896/35/4614/521961/5de77960E8c7c9c54/a62089ef34ef75b9.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (17, '1616786078212', '2021-03-27 03:14:38', '299', 1, '波尔多AOC】归星（Geothim）法国原瓶原装进口红酒礼盒 葡萄酒整箱 波尔多AOC级归星城堡系列750ml*6瓶', 'undefined', 0, '6.2', '啊啊', NULL);
INSERT INTO `orders` VALUES (18, '1616786130619', '2021-03-27 03:15:30', '1020', 1, '飞利浦(PHILIPS) 电动牙刷 净齿呵护型 成人声波震动牙刷 2种洁齿强度可选 力度感应 粉色 HX6806/02', 'undefined', 0, '6.2', '啊啊', NULL);
INSERT INTO `orders` VALUES (19, '1616786615189', '2021-03-27 03:23:35', '70840', 8, 'aa', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg', 0, '6.2', 'aa', NULL);
INSERT INTO `orders` VALUES (20, '1616786739709', '2021-03-27 03:25:39', '70840', 8, '名侦探柯楠手办,多啦爱梦手办', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg', 0, '6.2', '等等,等等', NULL);
INSERT INTO `orders` VALUES (21, '1616786867105', '2021-03-27 03:27:47', '88550', 10, '名侦探柯楠手办,多啦爱梦手办', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg', 0, '6.2', '等等,等等', NULL);
INSERT INTO `orders` VALUES (22, '1616786924370', '2021-03-27 03:28:44', '133', 1, '越南进口 沙巴哇（Sabava） 综合蔬果干 230g/袋（原味）即食蔬菜水果干 进口休闲零食小吃 办公室早餐下午茶', 'undefined', 0, '6.2', '啊啊', NULL);
INSERT INTO `orders` VALUES (23, '1616786948079', '2021-03-27 03:29:08', '35505', 5, '名侦探柯楠手办,多啦爱梦手办,格尔顿书包男韩版原宿ulzzang初高中大学生背包 尼龙帆布大容量双肩包女 防刮耐磨笔记本电脑包 黑色【带毛绒挂件随机】', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg', 0, '6.2', '等等,等等,啊啊', NULL);
INSERT INTO `orders` VALUES (24, '1616787003583', '2021-03-27 03:30:03', '1020', 1, '飞利浦(PHILIPS) 电动牙刷 净齿呵护型 成人声波震动牙刷 2种洁齿强度可选 力度感应 粉色 HX6806/02', 'undefined', 0, '6.2', '啊啊', NULL);
INSERT INTO `orders` VALUES (25, '1620570417156', '2021-05-09 22:26:57', '68', 1, '唐朝图书', 'https://img13.360buyimg.com/n1/s200x200_17957/ded0bc47-8d54-44e1-9836-e5e4b0c023a9.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (26, '1620570500056', '2021-05-09 22:28:20', '55', 1, '中国简书', 'https://img12.360buyimg.com/n1/s200x200_jfs/t1/140731/35/11926/263948/5f938f91E8021dc8c/8572c71f9305ac8c.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (27, '1620570527697', '2021-05-09 22:28:47', '8855', 1, '海贼王手办', 'https://img12.360buyimg.com/n7/jfs/t1/78134/17/16003/162497/5dd932f6Ea3952bbe/323e89ad1893c0b4.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (28, '1620570636128', '2021-05-09 22:30:36', '8855', 1, '皮卡丘手办', 'https://img11.360buyimg.com/n7/jfs/t1/9280/12/14822/321798/5c65872aE8db4ba6a/241b1876722e8121.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (29, '1620570754453', '2021-05-09 22:32:34', '8855', 1, '皮卡丘手办', 'https://img11.360buyimg.com/n7/jfs/t1/9280/12/14822/321798/5c65872aE8db4ba6a/241b1876722e8121.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (30, '1620570871360', '2021-05-09 22:34:31', '109', 1, '篮球', 'https://img10.360buyimg.com/n7/jfs/t1/104847/6/13575/170598/5e5caa74Ea6cb3c44/42cfec55a9a2c73b.jpg', 0, '6.2', '等等', '广东梅州');
INSERT INTO `orders` VALUES (31, '1620571119239', '2021-05-09 22:38:39', '109', 1, '羽毛球拍', 'https://img14.360buyimg.com/n7/jfs/t1/87896/35/4614/521961/5de77960E8c7c9c54/a62089ef34ef75b9.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (32, '1620571205590', '2021-05-09 22:40:05', '109', 1, '网球', 'https://img10.360buyimg.com/n7/jfs/t18946/356/494995386/386926/f1049b14/5a90eea3Nd495fd11.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (33, '1620571271144', '2021-05-09 22:41:11', '55', 1, '阿凡提手办', 'https://img10.360buyimg.com/n7/jfs/t1/93789/10/18305/148095/5e9530e7E837902f6/7cc7145a21480c80.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (34, '1620571343165', '2021-05-09 22:42:23', '8855', 1, '皮卡丘手办', 'https://img11.360buyimg.com/n7/jfs/t1/9280/12/14822/321798/5c65872aE8db4ba6a/241b1876722e8121.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (35, '1620571539344', '2021-05-09 22:45:39', '20', 1, '名侦探柯楠手办,多啦爱梦手办,篮球,优品茶具', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg', 0, '6.2', '等等,等等,等等,等等', NULL);
INSERT INTO `orders` VALUES (36, '1620571687313', '2021-05-09 22:48:07', '109', 1, '羽毛球拍', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg', 0, '6.2', '等等', NULL);
INSERT INTO `orders` VALUES (37, '1620571831233', '2021-05-09 22:50:31', '109', 1, '羽毛球拍', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg', 0, '6.2', '等等', '广东省广州市海珠区新港中路397号');
INSERT INTO `orders` VALUES (38, '1620571859155', '2021-05-09 22:50:59', '8855', 1, '名侦探柯楠手办', 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg', 0, '6.2', '等等', '广东省广州市海珠区新港中路397号');
INSERT INTO `orders` VALUES (39, '1620571984473', '2021-05-09 22:53:04', '22', 1, '游中国', 'https://img13.360buyimg.com/n1/s200x200_jfs/t29524/286/1623830899/611422/4b877c52/5ce5151cNfed4578c.jpg', 0, '6.2', '等等', '广东省广州市海珠区新港中路397号');
INSERT INTO `orders` VALUES (40, '1620572025021', '2021-05-09 22:53:45', '109', 1, '羽毛球拍', 'https://img14.360buyimg.com/n7/jfs/t1/87896/35/4614/521961/5de77960E8c7c9c54/a62089ef34ef75b9.jpg', 0, '6.2', '等等', '北京市朝阳区');

SET FOREIGN_KEY_CHECKS = 1;
