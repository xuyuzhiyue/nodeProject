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

const moment = require('../../pages/moment/moment');
moment.locale('en', {
  longDateFormat: {
    l: "YYYY-MM-DD",
    L: "YYYY-MM-DD HH:mm:ss",
  }
}); 
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
    goods_introduce:'',
    isCollect:false,
    shopName:'',
    collectdata:'',
  },
  shopName:'',
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
    goods_small_logo:'',
    shopName:'',
    nickName:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.shopName = options.shopName,
    this.goods_name=options.goods_name,
    this.pics_mid3=options.pics_mid3,
    this.pics_mid2=options.pics_mid2,
    this.pics_mid1=options.pics_mid1,
    this.goods_price=options.goods_price,
    this.GoodsInfo.shopName = options.shopName,
    this.GoodsInfo.goods_id=options.goods_id,
    this.GoodsInfo.goods_name=options.goods_name,
    this.GoodsInfo.pics_mid3=options.pics_mid3,
    this.GoodsInfo.pics_mid2=options.pics_mid2,
    this.GoodsInfo.pics_mid1=options.pics_mid1,
    this.GoodsInfo.goods_price=options.goods_price,
    this.GoodsInfo.goods_small_logo = options.goods_small_logo
    
    // 获取缓存中商品收藏的数组
    let collect = wx.getStorageSync('collect') || []
    // 判断当前商品是否被收藏
    let isCollect = collect.some(v => v.goods_id === this.GoodsInfo.goods_id)
    const {nickName} = wx.getStorageSync('userinfo')
    this.setData({
      nickName:nickName,
      goods_name:options.goods_name,
      pics_mid3:options.pics_mid3,
      pics_mid2:options.pics_mid2,
      pics_mid1:options.pics_mid1,
      goods_price:options.goods_price,
      shopName:options.shopName,
      // iphone部分手机 不识别webp图片格式
      // 最好找到后台 让他进行修改
      // 临时自己改 确保后台在 webp => 1.jpg
      goods_introduce:decodeURIComponent(options.goods_introduce).replace(/\.webp/g,'.jpg'),
      isCollect
    })
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
    const {nickName} = wx.getStorageSync('userinfo')
    if(!nickName){
      wx.showToast({
        title: '请先登录',
      })
      return
    } 
    // 请求获取购物车数据
    wx.request({
      url: `http://127.0.0.1:8800/gouwucheget/${nickName}`,
      method:'post',
      success:res => {
        // console.log(res,'请求获取购物车数据');
        // 1.获取缓存中的购物车 数组
        // let cart = wx.getStorageSync('cart') || []
        let cart = res.data.message
        // 2.判断 商品对象是否存在于购物车中
        let index = cart.findIndex(v => v.goods_id === ( this.GoodsInfo.goods_id) * 1)
        if(index === -1){
          // 不存在 第一次添加
          this.GoodsInfo.nickName = nickName
          this.GoodsInfo.shopName = this.shopName
          this.GoodsInfo.num = 1;
          this.GoodsInfo.checked = 1
          this.GoodsInfo.orderDate = Date.now()
          this.GoodsInfo.orderDatess = moment().format('L')
          cart.push(this.GoodsInfo)
          request({
            url:'/gouwuche',
            method:'POST',
            data:this.GoodsInfo
          }).then(res => {
            // console.log(res,'不存在第一次添加');
          })
        }else{
          // 已经存在于购物车数据 执行 num++
          cart[index].num ++;
          cart[index].orderDate = (this.GoodsInfo.orderDate) * 1
          cart[index].goods_price = (this.GoodsInfo.goods_price).toString() 
          cart[index].goods_id = (this.GoodsInfo.goods_id).toString()
          cart[index].orderDatess = moment().format('L')
          delete cart[index].id;
          wx.request({
            url: `http://127.0.0.1:8800/gouwuche/${nickName}/${this.GoodsInfo.goods_id}/${this.GoodsInfo.goods_name}`,
            method:'put',
            data:cart[index],
            success:res => {
              // console.log(res,'num++');
            }
          })
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

    
  },

  // 点击商品收藏图标
  handleCollect(){
    const {nickName} = wx.getStorageSync('userinfo')
    if(!nickName){
      wx.showToast({
        title: '请先登录',
      })
      return
    } 
    // let isCollect = false
    // 1.获取缓存中的商品收藏
    // let collect = wx.getStorageSync('collect') || []
    // 2.判断改商品是否被收藏过
    // let index = collect.findIndex(v=>v.goods_id === this.GoodsInfo.goods_id)
    // 获取已经收藏的信息
    request({
      url: '/collect',
      method:'POST',
      data:{nickName}
    }).then(res => {
      this.setData({
        collectdata:res
      })
      let isCollect = false
      // 1.获取数据库中的商品收藏
      let collect = res
      // 2.判断改商品是否被收藏过
      let index = collect.findIndex(v=>(v.goods_id)*1 === (this.GoodsInfo.goods_id)*1)
    // 3.当index != -1 表示 已经收藏过
    if(index !== -1){
      // 能找到 已经收藏过了 在数组中删除该商品
      collect.splice(index,1)
      wx.request({
        url: `http://127.0.0.1:8800/collects/${nickName}/${this.GoodsInfo.goods_id}/${this.GoodsInfo.goods_name}`,
        method:'DELETE',
        success:res => {
          // console.log(res,'在数组中删除该商品');
        }
      })
      isCollect=false
      wx.showToast({
        title: '取消成功',
        icon:'success',
        mask: true,
      })
    }else{
      // 没有被收藏
      this.GoodsInfo.nickName = nickName
      this.GoodsInfo.shopName = this.shopName
      collect.push(this.GoodsInfo)
      wx.request({
        url: 'http://127.0.0.1:8800/collects',
        method:'POST',
        data:this.GoodsInfo,
        success:res => {
          // console.log(res,'没有被收藏');
        }
      })
      isCollect=true
      wx.showToast({
        title: '收藏成功',
        icon:'success',
        mask: true,
      })
    }

    // 4.把数组存入缓存中
    wx.setStorageSync('collect', collect)
    // 修改data中的数据
    this.setData({
      isCollect
    })
  })

  },
   
  // 点击立即购买
  handelPay(){
    // 1.判断收获地址
    const address = wx.getStorageSync('address')
    if(!address.userName){
      wx.showToast({
        title: '请填写收获信息',
      })
      return
    }
    this.GoodsInfo.shopName = this.shopName
    this.GoodsInfo.num = 1;
    this.GoodsInfo.checked = 1
    this.GoodsInfo.orderDate = Date.now()
    this.GoodsInfo.orderDatess = moment().format('L')
    // let cart = wx.getStorageSync('cart') || []
    wx.setStorageSync('cart', [this.GoodsInfo])
    wx.navigateTo({
      url: '/pages/pay/index',
    })
  }
})