// pages/goods_detail/index.js
// 1.点击轮播图预览大图
// 1.2给轮播图绑定点击事件
// 1.3调用小程序的api previewImage 
// 2.点击加入购物车
// 2.1获取缓存中的购物车数据 数组格式
// 2.2 先判断一下商品是否已经存在于购物车
// 2.3如果存在，则修改商品数据 执行购物车数据++ 重新把购物车数据 填充回缓存中
// 2.4 加入第一次添加 不存在在购物车中 直接给后无车数据添加一个新元素 带上 购物车数量
// 2.5弹出提示

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
  goods_name:'',
  pics_mid3:'',
  pics_mid2:'',
  pics_mid1:'',
  goods_price:'',
  goods_introduce:'',
  GoodsInfo:{
    goods_id:'',
    goods_name:'',
    pics_mid3:'',
    pics_mid2:'',
    pics_mid1:'',
    goods_price:'',
    goods_small_logo:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.goods_name=options.goods_name,
    this.pics_mid3=options.pics_mid3,
    this.pics_mid2=options.pics_mid2,
    this.pics_mid1=options.pics_mid1,
    this.goods_price=options.goods_price,
    this.GoodsInfo.goods_id=options.goods_id,
    this.GoodsInfo.goods_name=options.goods_name,
    this.GoodsInfo.pics_mid3=options.pics_mid3,
    this.GoodsInfo.pics_mid2=options.pics_mid2,
    this.GoodsInfo.pics_mid1=options.pics_mid1,
    this.GoodsInfo.goods_price=options.goods_price,
    this.GoodsInfo.goods_small_logo = options.goods_small_logo
    this.setData({
      goods_name:options.goods_name,
      pics_mid3:options.pics_mid3,
      pics_mid2:options.pics_mid2,
      pics_mid1:options.pics_mid1,
      goods_price:options.goods_price,
      // iphone部分手机 不识别webp图片格式
      // 最好找到后台 让他进行修改
      // 临时自己改 确保后台在 webp => 1.jpg
      goods_introduce:decodeURIComponent(options.goods_introduce).replace(/\.webp/g,'.jpg')
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

  // 点击轮播图 放大预览
  handlePrevewImage(e){
    // console.log('哈哈');
    // 1.先构造预览的图片数据
    // 构造新数组
  //  const urls = this.GoodsInfo.pics.map(v=> v.pics_mid)

    const urls = [this.pics_mid3,this.pics_mid2,this.pics_mid1]
    // 接受传递过来的id 
    const index = e.currentTarget.dataset.index * 1
    wx-wx.previewImage({
      urls: urls,
      current:urls[index]
    })
  },

  // 点击加入购物车
  handleCartAdd(){
    // console.log('hha');
    // 1.获取缓存中的购物车 数组
    let cart = wx.getStorageSync('cart') || []
    // 2.判断 商品对象是否存在于购物车中
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id)
    if(index === -1){
      // 不存在 第一次添加
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true
      cart.push(this.GoodsInfo)
    }else{
      // 已经存在于购物车数据 执行 num++
      cart[index].num ++;
    }
    // 把购物车重新添加回缓存中
    wx.setStorageSync('cart', cart)
    // 弹窗提示
    wx.showToast({
      title: '加入成功',
      icon:'success',
      // true 防止用户 手抖 疯狂点击按钮
      mask:true
    })
  }

})