// pages/chatToRecord/chatToRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userIdSend:'',
    userIdReceive:'',
	message:'',
    // chats:{},
    chats: {
      doctorName: "隔壁老王",
      userHead: "https://dentist-applets.oss-cn-beijing.aliyuncs.com/dentistImages/1615473521869.jpg",
      doctorHead: "https://thirdwx.qlogo.cn/mmopen/vi_32/f0HnJZBpTmW0cypykb30CazEoPHjg3P1oyDzY1SCxQ4AuyHicCVIpgj8usvSQVnGqYXXyD2lwfr1zR1O5krct1w/132",
      chatInfo: [
        {
          userIdSend: 20,
          userIdReceive: 3,
          content: "我爱你呀呀呀我爱你呀呀呀我爱你呀呀呀我爱你呀呀呀我爱你呀呀呀我爱你呀呀呀",
        },
        {
          userIdSend: 20,
          userIdReceive: 3,
          content: "不好意思，我说错了",
        },
        {
          userIdSend: 3,
          userIdReceive: 20,
          content: "狗屁",
        },
        {
          userIdSend: 3,
          userIdReceive: 20,
          content: "你就是爱我",
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //userIdSend这个值其实可以不用传过来，直接在缓存中取用户信息id即可
    // var userIdSend = options.userIdSend
    // var userIdReceive = options.userIdReceive
    var userIdSend = 20
    var userIdReceive = 3
    this.setData({
      userIdSend:userIdSend,
      userIdReceive:userIdReceive
    })
    // this.getChats(userIdSend,userIdReceive)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})