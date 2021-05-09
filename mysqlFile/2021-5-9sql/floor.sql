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

 Date: 09/05/2021 23:13:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for floor
-- ----------------------------
DROP TABLE IF EXISTS `floor`;
CREATE TABLE `floor`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image_src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `iamge_width` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `open_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `navigator_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isdel` int(255) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of floor
-- ----------------------------
INSERT INTO `floor` VALUES (1, '优质服饰', 'http://127.0.0.1:8800/floor/pic_floor1', '232', '时尚女装', 'navigate', '/pages/goods_list?query=服饰', 0);
INSERT INTO `floor` VALUES (2, '春季热门', 'http://127.0.0.1:8800/floor/pic_floor2', '233', '时尚女装', 'navigate', '/pages/goods_list?query=热', 0);
INSERT INTO `floor` VALUES (3, '爆款清仓', 'http://127.0.0.1:8800/floor/pic_floor3', '233', '时尚女装', 'navigate', '/pages/goods_list?query=爆款', 0);
INSERT INTO `floor` VALUES (4, '倒春寒', 'http://127.0.0.1:8800/floor/pic_floor4', '233', '时尚女装', 'navigate', '/pages/goods_list?query=春季', 0);
INSERT INTO `floor` VALUES (5, '怦然心动', 'http://127.0.0.1:8800/floor/pic_floor5', '233', '时尚女装', 'navigate', '/pages/goods_list?query=心动', 0);
INSERT INTO `floor` VALUES (6, '勇往直前', 'http://127.0.0.1:8800/floor/pic_floor6', '232', '户外活动', 'navigate', '/pages/goods_list?query=户外', 0);
INSERT INTO `floor` VALUES (7, '户外登山包', 'http://127.0.0.1:8800/floor/pic_floor7', '273', '户外活动', 'navigate', '/pages/goods_list?query=登山包', 0);
INSERT INTO `floor` VALUES (8, '超强手套', 'http://127.0.0.1:8800/floor/pic_floor8', '193', '户外活动', 'navigate', '/pages/goods_list?query=手套', 0);
INSERT INTO `floor` VALUES (10, '户外运动鞋', 'http://127.0.0.1:8800/floor/pic_floor9', '193', '户外活动', 'navigate', '/pages/goods_list?query=运动鞋', 0);
INSERT INTO `floor` VALUES (11, '冲锋衣系列', 'http://127.0.0.1:8800/floor/pic_floor10', '273', '户外活动', 'navigate', '/pages/goods_list?query=冲锋衣', 0);
INSERT INTO `floor` VALUES (12, '清新气质', 'http://127.0.0.1:8800/floor/pic_floor11', '232', '箱包配饰', 'navigate', '/pages/goods_list?query=饰品', 0);
INSERT INTO `floor` VALUES (13, '复古胸针', 'http://127.0.0.1:8800/floor/pic_floor12', '263', '箱包配饰', 'navigate', '/pages/goods_list?query=胸针', 0);
INSERT INTO `floor` VALUES (14, '韩版手链', 'http://127.0.0.1:8800/floor/pic_floor13', '203', '箱包配饰', 'navigate', '/pages/goods_list?query=手链', 0);
INSERT INTO `floor` VALUES (15, '水晶项链', 'http://127.0.0.1:8800/floor/pic_floor14', '193', '箱包配饰', 'navigate', '/pages/goods_list?query=水晶项链', 0);
INSERT INTO `floor` VALUES (16, '情侣表', 'http://127.0.0.1:8800/floor/pic_floor15', '273', '箱包配饰', 'navigate', '/pages/goods_list?query=情侣表', 0);

SET FOREIGN_KEY_CHECKS = 1;
