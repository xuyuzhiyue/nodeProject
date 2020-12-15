// pages/login/index.js
Page({
  handleGetUserInfo(e){
    // console.log(e);set
    const  {userInfo} = e.detail; 
    wx.setStorageSync('userinfo',userInfo)
    // 跳回上一个页面
    wx.navigateBack({
      delta:1
    })
  }
})