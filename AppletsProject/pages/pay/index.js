
import { getSetting,chooseAddress,openSetting,showModal,showToast} from "../utils/asyncWx"
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    cart:[],
    totalPrice:0,
    totalNum:0
  },
  onShow(){
    // 1.获取缓存中的收获信息地址
    const address = wx.getStorageSync('address')
    // 获取缓存中的购物数据
    let cart = wx.getStorageSync('cart') || []
    // 1.过滤后的购物车数组
    cart = cart.filter(v=>v.checked)
    this.setData({address})

    // 1.总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(el =>{
        totalPrice += el.num*el.goods_price
        totalNum += el.num
    })
    this.setData({
      cart,
      totalPrice,
      totalNum,
      address
    });
  },

  // 支付页面
  handlePay(){
    wx.showToast({
      title: '支付成功',
      icon:'none',
      mask: true,
      success: (res) => {
       setTimeout(()=>{
          // 获取缓存中的购物数据
          let cart = wx.getStorageSync('cart') || []
          // 1.过滤后的购物车数组
          let allCartTranOder = wx.getStorageSync('cartTranOder') || []
          let cartTranOder = cart.filter(v=>v.checked)
          wx.navigateTo({
            url: '/pages/order/index',
          })
          // 1.过滤后的购物车数组
          cart = cart.filter(v=>v.checked ===false)
          wx.setStorageSync('cart',cart);
          // console.log(cartTranOder,'cartTranOder');
          const {nickName} = wx.getStorageSync('userinfo')
          // 增加订单信息到数据库
          cartTranOder.map((item,index) => {
          wx.request({
            url: 'http://127.0.0.1:8800/order',
            method:'POST',
            data:{
              orderName:item.goods_name,
              orderIden:`${item.orderDate}`,
              orderTime:item.orderDatess,
              orderPay:item.goods_price * 1,
              orderNumber:item.num,
              orderImage:item.pics_mid2,
              name:nickName || '无'
            },
            success:res=>{
              if(this.data.message === '添加成功'){
                wx.showToast({
                  title: '支付成功',
                  icon:'success',
                  // true 防止用户 手抖 疯狂点击按钮
                  mask:true
                })
              }
            }
          })
        })
          wx.setStorageSync('cartTranOder',[...allCartTranOder,...cartTranOder])
          this.setData({
            cart:[]
          })
       },2000)
      },
    })
  }
})