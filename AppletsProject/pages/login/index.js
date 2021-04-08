// pages/login/index.js
Page({
  // handleGetUserInfo(e){
  //   console.log(e);
  //   const  {userInfo} = e.detail; 
  //   userInfo.city = '梅州'
  //   userInfo.country = "中国"
  //   userInfo.telNumber = "13267828822"
  //   userInfo.userName = "6.2"
  //   userInfo.nickName = "6.2"
  //   userInfo.all="广东省梅州市"
  //   userInfo.language="汉语"
  //   userInfo.province = "哈哈"
  //   userInfo.avatarUrl = "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1422753663,4206031071&fm=26&gp=0.jpg"
  //   wx.setStorageSync('userinfo',userInfo)
  //   // 跳回上一个页面
  //   wx.navigateBack({
  //     delta:1
  //   })
  // },
  handleGetUserInfo() {
    wx.getUserProfile({
      desc: "获取你的昵称、头像、地区及性别", // 不写不弹提示框
      success: res => {
        const  userInfo = res.userInfo; 
        wx.setStorageSync('userinfo',userInfo)
        // 跳回上一个页面
        wx.navigateBack({
          delta:1
        })
            // 跳回上一个页面
        wx.navigateBack({
          delta:1
        })
        // console.log(res)
      },
      fail: res => {
        //拒绝授权
        wx.showToast({
          title: '您拒绝了授权',
          icon: 'none'
        })
        return;
      }
    })
  }
})