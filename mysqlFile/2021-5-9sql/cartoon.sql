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

 Date: 09/05/2021 23:13:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cartoon
-- ----------------------------
DROP TABLE IF EXISTS `cartoon`;
CREATE TABLE `cartoon`  (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `image_src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goodsType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cat_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shopName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`goods_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 608 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cartoon
-- ----------------------------
INSERT INTO `cartoon` VALUES (600, 'https://img14.360buyimg.com/n7/jfs/t1/125112/40/13658/493247/5f701143E80b33af0/d20f7f284682ae9e.jpg', '卡通人物', '卡通', '阿凡提手办', '呵呵');
INSERT INTO `cartoon` VALUES (601, 'https://img10.360buyimg.com/n7/jfs/t1/46452/18/7140/119372/5d4b8e8fE9654dc2f/0b6d7de5e1d6adf6.jpg', '卡通人物', '卡通', '皮卡丘手办', NULL);
INSERT INTO `cartoon` VALUES (602, 'https://img13.360buyimg.com/n7/jfs/t1/123058/12/3487/415889/5ed21eacEef310112/1d3749eb2fcd4dc5.jpg', '卡通人物', '卡通', '名侦探柯楠手办', NULL);
INSERT INTO `cartoon` VALUES (603, 'https://img13.360buyimg.com/n7/jfs/t1/123001/29/7128/216373/5f0d0532E8faae6f8/2f9068bf22775fdc.jpg', '卡通人物', '卡通', '海贼王手办', NULL);
INSERT INTO `cartoon` VALUES (604, 'https://img13.360buyimg.com/n7/jfs/t1/134217/33/1293/922167/5ed71098E7bd743a6/4026fcefa978770c.jpg', '卡通人物', '卡通', '火影火影手办', NULL);
INSERT INTO `cartoon` VALUES (605, 'https://img10.360buyimg.com/n7/jfs/t1/72878/27/4740/110592/5d2edb36E6b7a6b4c/4248d489c1732c58.jpg', '卡通人物', '卡通', '灌篮高手手办', NULL);
INSERT INTO `cartoon` VALUES (606, 'https://img11.360buyimg.com/n7/jfs/t1/150296/8/18627/210993/5fd9a763E98be6a50/e413c3f25bf430f4.jpg', '卡通人物', '卡通', '多啦爱梦手办', NULL);
INSERT INTO `cartoon` VALUES (607, 'https://img12.360buyimg.com/n7/jfs/t2581/194/2636574377/235122/313d8871/576baf35Nc22f0dd6.jpg', '卡通人物', '卡通', '初音未来手办', NULL);

SET FOREIGN_KEY_CHECKS = 1;
