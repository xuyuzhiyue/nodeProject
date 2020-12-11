// /引用发送请求的方法
import { request } from "../../pages/request/index.js"

Page({
  data: {
    //  轮播图数据
    swiperList: [],
    // 导航数据
    catesList: [],
    // 楼层数据
    floorList:[]
  },

  //  页面开始加载 就会触发
  onLoad: function (option) {
    // 1.发布异步请求数据获取轮播图数据  优化的手段可以通过es6语法 promise来解决问题
    // wx.request({
    //   url: 'http://127.0.0.1:8800/rotationChart',
    //   success:result=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // })
    this.getSwiperList()
    this.getCateList()
    this.getFloorList()
  },
  // 获取轮播图数据
  getSwiperList() {
    request({
      url: '/rotationChart'
    }).then(result => {
      this.setData({
        swiperList: result
      })
    })
  },
  // 获取分类导航数据
  getCateList() {
    request({
      url: '/navigation'
    }).then(result => {
      this.setData({
        catesList: result
      })
    })
  },
    // 获取楼层数据
    getFloorList() {
      request({
        url: '/floor'
      }).then(result => {
        this.setData({
          floorList: result
        })
      })
    }
})