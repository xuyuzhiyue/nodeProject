// pages/order/index.js
import { request } from "../../pages/request/index.js"
// 引用es7语法
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"
import { async } from "../lib/runtime/runtime.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartTranOder:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getcartTranOder()
  },
  // async getcartTranOder(){
  //   const cartTranOder  = await request({ url: '/order'})
  //   // console.log(cartTranOders,'cartTranOders');
  //   // let cartTranOder = wx.getStorageSync('cartTranOder') || []
  //   this.setData({
  //     cartTranOder
  //   })
  // }
  getcartTranOder(){
    const {nickName} = wx.getStorageSync('userinfo')
    wx.request({
      url: 'http://127.0.0.1:8800/ordercheck',
      method:'post',
      data:{name:nickName},
      success:res => {
        this.setData({
          cartTranOder:res.data.message
        })
      }
    })
  }
})