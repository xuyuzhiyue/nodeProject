
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
})