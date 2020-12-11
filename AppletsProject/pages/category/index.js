// /引用发送请求的方法
import { request } from "../../pages/request/index.js"
// 引用es7语法
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    // 右侧的菜单数据
    rightContent: [],
    // 被点击的左侧菜单
    currentIndex: 0,
    // 右侧内容的滚动距离顶部的位置
    srcollTop: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */

  //  接口返回数据
  Cates: [],
  onLoad: function (options) {
    // 0.以前web中本地存储和小程序中的本地存储的区别
    //  0.1写代码方式不一样
    // web : localStorage.setItem("key":"value")  localStorage.getItem("key")
    // 小程序：wx.setStorageSync("key", "value")  wx.getStorageSync("key");
    // 0.2 存的时候 有没有做类型转换
    // web 不管存入的是什么类型的数据，最终都会先调用一下 toString(),把数据变成字符串 再存入进去
    // 小程序 ： 不存在 类型转换的这个操作 村什么类型的数据进去 获取的时候就是什么类型
    // 1.先判断一下本地存储中有没有旧的数据
    // {tmie:Date.now(),data[...]}
    // 2.没有旧的数据 直接发送新的请求
    // 3.有旧的数据 同时 旧的数据也没有过期 就使用 本地存储中的旧数据即可

    // 1.获取本地存储中的数据（小程序中也存在本地存储 技术）
    const Cates = wx.getStorageSync("cates");
    // 2.判断
    if (!Cates) {
      // 不存在 发送请求数据
      this.getCates()
    } else {
      // 有旧的数据 暂时定义过期时间  10s
      if ((Date.now() - Cates.time) > 1000 * 5) {
        // 重新发送请求
        this.getCates()
        console.log(Date.now() - Cates.time);
      } else {
        console.log(Date.now() - Cates.time);
        // 可以使用旧数据
        this.Cates = Cates.data;
        // 构造左侧的大菜数据
        let leftMenuList = this.Cates.map(v => v.cat_name)

        // 构造右侧的商品数据
        let rightContent = this.Cates[0].children
        this.setData({
          leftMenuList,
          rightContent
        })
      }
    }

    // this.getCates()
  },

  // 获取分类数据
  async getCates() {
    // request({
    //   url: "/allgoods"
    // }).then(res => {
    //   console.log(res);
    //   this.Cates = res.data.message

    //   // 把接口的数据存在本地存储中
    //   wx.setStorageSync("cates", { time: Date.now(), data: this.Cates })

    //   // 构造左侧的大菜数据
    //   let leftMenuList = this.Cates.map(v => v.cat_name)

    //   // 构造右侧的商品数据
    //   let rightContent = this.Cates[0].children
    //   this.setData({
    //     leftMenuList,
    //     rightContent
    //   })
    // })

    // 1.使用es7async  await来发送异步请求
    const res = await request({ url: "/allgoods" })
    this.Cates = res

    // 把接口的数据存在本地存储中
    wx.setStorageSync("cates", { time: Date.now(), data: this.Cates })

    // 构造左侧的大菜数据
    let leftMenuList = this.Cates.map(v => v.cat_name)

    // 构造右侧的商品数据
    let rightContent = this.Cates[0].children
    this.setData({
      leftMenuList,
      rightContent
    })
  },
  // 左侧菜单的点击事件
  handleItemTap(e) {
    // 1.获取被点击的标题身上的索引
    // 2.给data中的currentIndex赋值就可以
    // 3.根据不同的索引来渲染右侧的商品内容
    const { index } = e.currentTarget.dataset;
    let rightContent = this.Cates[index].children
    this.setData({
      currentIndex: index,
      rightContent,

      // 重新设置右侧内容的 scroll-view距离顶部的距离
      srcollTop: 0
    })
  }
})