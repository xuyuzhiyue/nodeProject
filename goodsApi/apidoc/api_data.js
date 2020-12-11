define({ "api": [
  {
    "type": "get",
    "url": "所有商品数据",
    "title": "",
    "name": "Goods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cat_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cat_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cat_pid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cat_level",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "0/1",
            "optional": false,
            "field": "cat_deleted",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cat_icon",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "0/1",
            "optional": false,
            "field": "isdel",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cat_type",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err_code\": 0,\n    \"message\": [\n {\n            \"cat_id\": 1,\n            \"cat_name\": \"大家电\",\n            \"cat_pid\": 0,\n            \"cat_level\": 0,\n            \"cat_deleted\": false,\n            \"cat_icon\": \"/full/none.jpg\",\n            \"children\": [\n                {\n                    \"cat_id\": 3,\n                    \"cat_name\": \"电视\",\n                    \"cat_pid\": 1,\n                    \"cat_level\": 1,\n                    \"cat_deleted\": false,\n                    \"cat_icon\": \"/full/none.jpg\",\n                    \"children\": [\n                        {\n                            \"cat_id\": 1,\n                            \"cat_name\": \"曲面电视\",\n                            \"cat_pid\": 3,\n                            \"cat_level\": 2,\n                            \"cat_deleted\": 0,\n                            \"cat_icon\": \"https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg\",\n                            \"isdel\": 0,\n                            \"cat_type\": \"电视\"\n                        },\n                        {\n                            \"cat_id\": 8,\n                            \"cat_name\": \"长虹\",\n                            \"cat_pid\": 3,\n                            \"cat_level\": 2,\n                            \"cat_deleted\": 0,\n                            \"cat_icon\": \"https://api-hmugo-web.itheima.net/full/14291787e1f9f0215816048e813e4ec4fbb3dffe.jpg\",\n                            \"isdel\": 0,\n                            \"cat_type\": \"电视\"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "轮播图",
    "title": "",
    "name": "rotationChart",
    "group": "rotationChart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goods_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_src",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "opten_type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "navigator_url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "0/1",
            "optional": false,
            "field": "isdel",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"err_code\": 0,\n    \"message\": [{\n\t\t\"goods_id\": 38,\n\t\t\"image_src\": \"http://127.0.0.1:8800/rotat/banner3\",\n\t\t\"open_type\": \"navigate\",\n\t\t\"navigator_url\": \"/pages/goods_detail/main?goods_id=38\",\n\t\t\"isdel\": 0\n\t}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "rotationChart"
  }
] });
