// 1.获取用户的收获地址
// 1.1绑定点击事件
// 1.2调用小程序内置 api 获取用户的收获地址 
// 1.3 获取用户 对小程序 所授予 获取地址的 权限 状态 scope 
// 1.3.1 假设用户 点击获取地址的提示框 确定 scope 值 true
// 1.3.1 假设 用户 点击取消 则scope则为false
// 1.3.2 假设用户 从来没有调用过，则underfind
// authSetting

// 3.onshow 
// 3.0 回到商品详情页面 第一添加商品的时候 手动添加属性
// 1. num = 1
// 2. checked = true 
// 3.1 获取缓存中的数据
// 3.2 把购物车数据 填充到data中
// 4. 全选的实现 数据的展示
// 5总价格和总数量 
// 5.1 都需要商品被选中 我们才拿它来计算
// 5.2获取购物车数量
// 5.3遍历
// 5.4判断商品是否被选中
// 总价格 += 商品单价 * 商品的数量
// 总数量 += 商品的数量
// 把计算后的价格和数量 设置返回data中即可

import { getSetting,chooseAddress,openSetting} from "../utils/asyncWx"
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    cart:[],
    allChecked:false,
    totalPrice:0,
    totalNum:0
  },
  onShow(){
    // 1.获取缓存中的收获信息地址
    const address = wx.getStorageSync('address')
    // 获取缓存中的购物数据
    const cart = wx.getStorageSync('cart') || []
        // 1.计算全选
    // every 数组方法 会遍历 会接受一个回调函数 那么  每一个回调函数都会返回 true  那么 every 方法 返回值为true
    // 只要 有一个回调函数返回false 那么不在循环执行 直接返回false
    // 空数组 调用 every ,返回值就是 true 
    // const allChecked = cart.length?cart.every(v=>v.checked):false
    let allChecked = true
    // 1.总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(el =>{
      if(el.checked){
        totalPrice += el.num*el.goods_price
        totalNum += el.num
      }else{
        allChecked=false
      }
    })
    // 判断数组是否为空
    allChecked=cart.length!=0?allChecked:false
    this.setData({
      address,
      cart,
      allChecked,
      totalPrice,
      totalNum
    })
  },
  // 点击收货地址
    async handleChooseAddress(){
      try{
      // 获取用户权限
      // wx.getSetting({
      //   success:result=>{
      //     // 2.获取权限状态 主要发现一些 属性名很怪异的时候 都要使用[]形式获取属性值
      //     const scpoeAddress = result.authSetting["Scope.address"];
      //     if(scpoeAddress === true || scpoeAddress === undefined){
      //       wx.chooseAddress({
      //         success:data => {
      //           console.log(data);
      //         }
      //       })
      //     }else{
      //       // 3.用户 以前拒绝过授予权限 先诱导用户打开授权页面
      //       wx.openSetting({
      //         success:data2 =>{
      //           // 4.用户可以调用 收货地址代码
      //           wx.chooseAddress({
      //             success:data3 => {
      //               console.log(data3);
      //             }
      //           })
      //         }
      //       })
      //     }
      //     // console.log(result);
      //   }
      // })
      // 1.获取 权限状态
      const res1 = await getSetting()
      const scpoeAddress = res1.authSetting["Scope.address"];
      
      // 2.判断 权限状态
      if(scpoeAddress === false){
        // 以前拒绝过授予权限 先诱导用户打开授权页面
        await openSetting()
      }
      // 调用收获地址的 api 
      let address = await chooseAddress();
      address.all = address.provinceName+address.cityName+address.countyName+address.detailInfo
      // 存入到缓存中
      wx.setStorageSync('address', address)
    }catch(err){
      console.log(err);
    }
  }
})