// pages/address/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[],
    region: ['广东省', '广州市', '海珠区'], // 初始值
    inputVal:'',
    mobile:0,
    inputName:'',
    mobileFormat:false
  },
  // onShow(){
  //   const address = wx.getStorageSync('address')
  //   if(!address){
  //     wx.showToast({
  //       title: '请先获取地址信息',
  //     })
  //     return
  //   } 
  // }, 
  onLoad(){
    const address = wx.getStorageSync('address')
    if(!address){
      wx.showToast({
        title: '请先获取地址信息',
      })
      return
    } 
    this.getAddress()
  },
  /**
   * 生命周期函数--监听页面加载
   */

  // 点击跳回上一页
  btnQuery(e){
    // console.log(e,'点击跳回上一页');
    const address = {
      userName:e.currentTarget.dataset.name,
      telNumber:e.currentTarget.dataset.number,
      all:e.currentTarget.dataset.address,
      id:e.currentTarget.dataset.id,
    }
    wx.setStorageSync('address', address)
    wx.navigateBack({
      delta:1
    })
  },
  // 点击删除
  btnDelete(e){
    // console.log(e,'点击删除');
    const id = e.currentTarget.dataset.id
    const {nickName} = wx.getStorageSync('userinfo')
    wx.request({
      url: `http://127.0.0.1:8800/address/${nickName}/${id}`,
      method:'delete',
      success:res => {
      //  console.log(res,'点击删除');
      wx.showToast({
        title: '删除成功',
        icon: 'success',
        duration: 1500
      })
      this.getAddress()
      }
    })
  },
  bindRegionChange: function (e) {  // picker值发生改变都会触发该方法
    // console.log('picker发送选择改变，携带值为', e,e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 详细地址
  handleInput(e){
    const inputVal = e.detail.value
    this.setData({inputVal})
  },
  // 联系方式
  handleNumber(e){
    let value = e.detail.value.replace(/\D/g, '')
    this.setData({
      mobile: value,
    })
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.mobile.length == 0) {
      wx.showToast({
        title: '请重新输入数字！',
        icon: 'success',
        duration: 1500
      })
      this.setData({
        mobileFormat: false,
      })

    } else if (this.data.mobile.length < 11) {
      wx.showToast({
        title: '手机号长度有误，请重新输入！',
        icon: 'none',
        duration: 1500
      })
      this.setData({
        mobileFormat: false,
      })

    } else if (!myreg.test(this.data.mobile)) {
      wx.showToast({
        title: '手机号有误，请重新输入！',
        icon: 'none',
        duration: 1500
      })
      this.setData({
        mobileFormat: false,
      })

    } else {
      this.setData({
        mobileFormat: true,
      })
    }
  },
  // 联系人
  handleName(e){
    const inputName = e.detail.value
    this.setData({inputName})
  },
  // 点击增加地址
  btnAdd(){
    const {nickName} = wx.getStorageSync('userinfo')
    if(!nickName){
      wx.showToast({
        title: '请先登录',
        icon:'fail'
      })
      return
    }
    const addressa = wx.getStorageSync('address')
    if(!addressa){
      wx.showToast({
        title: '请先获取地址信息',
      })
      return
    } 
    const {inputVal} = this.data
    const {inputName} = this.data
    const {mobileFormat} = this.data
    const {mobile} = this.data
    const {region} = this.data
    const address = region[0] + region[1] +region[2]+inputVal
    // const {nickName} = wx.getStorageSync('userinfo')
    const data  = {
      address:address,
      number:mobile,
      name:inputName,
      nickName
    }
    // console.log(data,'点击增加地址');
    if(inputName !== 0 && inputVal !== 0 && mobileFormat !== false){
      // console.log('增加成功');
      wx.request({
        url: `http://127.0.0.1:8800/addressAdd`,
        method:'post',
        data:data,
        success:res => {
        //  console.log(res,'增加成功');
          wx.showToast({
            title: '增加成功',
            icon: 'success',
            duration: 1500
          })
        this.getAddress()
        }
      })
    }else{
      wx.showToast({
        title: '请重新输入！',
        icon: 'success',
        duration: 1500
      })
    }
  },
  // 获取收获地址信息
  getAddress(){
    const {nickName} = wx.getStorageSync('userinfo')
    wx.request({
      url: `http://127.0.0.1:8800/address/${nickName}`,
      method:'post',
      success:res => {
      //  console.log(res,'获取收获地址信息');
       this.setData({
         address:res.data.message
       })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */

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