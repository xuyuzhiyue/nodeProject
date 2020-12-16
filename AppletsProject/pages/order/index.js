// pages/order/index.js
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
    let cartTranOder = wx.getStorageSync('cartTranOder') || []
    this.setData({
      cartTranOder
    })
  },

})