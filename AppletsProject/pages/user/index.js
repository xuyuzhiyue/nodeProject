// pages/user/index.js

// /引用发送请求的方法
import {request} from "../../pages/request/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    // 被收藏的商品数量
    collectNum:0,
    collectShopNum:0,
    // 我的足迹
    footprint:0
  },
  onShow(){
    
    const userinfo = wx.getStorageSync('userinfo')
    const {nickName} = wx.getStorageSync('userinfo')
    if(!nickName){
      wx.showToast({
        title: '请先登录',
      })
      return
    } 
    console.log();
    // const userinfo = wx.getStorageSync('userinfo')
    // const collect = wx.getStorageSync('collect') || []
    // this.setData({
    //   userinfo,
    //   collectNum:collect.length
    // })

    // 获取收藏数据
    request({
      url: '/collect',
      method:'POST',
      data:{nickName}
    }).then(res => {
      this.setData({
        userinfo:userinfo,
        collectNum:res.length,
        collectShopNum:this.quchong(res)
      })
    })

    this.getGouwuche()
  },
  // 获取购物车数据，当我的足迹
  getGouwuche(){
    const {nickName} = wx.getStorageSync('userinfo')
    request({
      url: `/gouwucheget/${nickName}`,
      method:'POST'
    }).then(res => {
      this.setData({
        footprint:res.length
      })
    })
  },
  quchong (arr) {
    //  第一步，去重
      var hash = [];
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i].shopName === arr[j].shopName) {
            ++i;
            j = i;
          }
        }
        arr[i].num = 0;
        hash.push(arr[i]);
      }
      // 第二步，统计重复个数
      hash.forEach(item => {
        arr.forEach(dd => {
          if (item.shopName === dd.shopName) {
            item.num++
          }
        })
      });
      return hash.length;
  },
  // 跳转到收获地址
  address(){
    wx.navigateTo({
      url: '/pages/address/index',
      })
  }
})
