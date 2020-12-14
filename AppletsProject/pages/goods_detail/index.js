// pages/goods_detail/index.js

// /引用发送请求的方法
import {request} from "../../pages/request/index"
// 引用es7语法
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_name:'',
    pics_mid3:'',
    pics_mid2:'',
    pics_mid1:'',
    goods_price:'',
    goods_introduce:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goods_name:options.goods_name,
      pics_mid3:options.pics_mid3,
      pics_mid2:options.pics_mid2,
      pics_mid1:options.pics_mid1,
      goods_price:options.goods_price,
      goods_introduce:decodeURIComponent(options.goods_introduce)
    })

    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
    //   data:{
    //     goods_id:53940
    //   },
    //   success:res=>{
    //     console.log(res,'res');
    //     this.setData({
    //       goods_introduce:res.data.message.goods_introduce
    //     })
    //   }
    // })
  },

})