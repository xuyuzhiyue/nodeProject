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

import { getSetting,chooseAddress,openSetting,showModal,showToast} from "../utils/asyncWx"
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
    // const cart = wx.getStorageSync('cart') || []
    // 请求购物车的数据
    const {nickName} = wx.getStorageSync('userinfo')
    wx.request({
      url: `http://127.0.0.1:8800/gouwucheget/${nickName}`,
      method:'post',
      success:res => {
        this.setCart(res.data.message)
      }
    })
    this.setData({address})
    // this.setCart(cart)
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
  },

  // 商品的选中
  handleItemChange(e){
    // 获取被修改的id
    const goods_id = e.currentTarget.dataset.id
    // console.log(goods_id);
    // 2.获取购物车数组
    let {cart} = this.data
    // 3.找到被修改的商品对象
    let index = cart.findIndex(v=>v.goods_id === goods_id)
    cart[index].checked = !cart[index].checked
    this.setCart(cart)
     
  },

  // 设置购物车状态
  setCart(cart){
    // this.setData({
    //   cart
    // });
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
    allChecked = cart.length !=0 ? allChecked : false;
    this.setData({
      cart,
      totalPrice,
      totalNum,
      allChecked
    });
    wx.setStorageSync('cart', cart)
    wx.setStorageSync('gouwuchecart', cart)
  },
  

  // 全选按钮
  handleItemAllChange(){
    // 1.获取data中的数据
    let {cart,allChecked} = this.data
    // 2.修改值
    allChecked=!allChecked
    // 3.循环修改cart数组 中的商品选中状态
    cart.forEach(v=>v.checked=allChecked)
    //4.把修改后的值填充回data中或缓存中
    this.setCart(cart)
  },

   
  // 商品数量的编辑功能
  async handleItemNumEdit(e){

    // 1.获取传递过来的参数
    const {operation,id} = e.currentTarget.dataset
    // console.log(operation,id);
    // 获取购物车数组
    let {cart} = this.data
    // 找到需要修改的商品的索引
    const index = cart.findIndex(v =>v.goods_id===id)
    // 判断是否要执行删除
    if(cart[index].num===1&&operation===-1){
      // 弹出提示框
      // wx.showModal({
      //   title:'提示',
      //   content:'您是否删除此商品',
      //   success:res=>{
      //     if(res.confirm){
      //       cart.splice(index,1)
      //       this.setCart(cart)
      //     }else{
      //       console.log('用户点击取消');
      //     }
      //   }
      // })
      const res = await showModal({content:"您是否删除此商品"})
      if(res.confirm){
        cart.splice(index,1)
        this.setCart(cart)
      }
    }else{
      // 进行修改数量
      cart[index].num += operation;
      // 设置回缓存中和data中
      this.setCart(cart);
    }
  },

  // 结算
  async handlePay(){
    // 1.判断收获地址
    const {address,totalNum} = this.data
    if(!address.userName){
      await showToast({title:"请填写收获信息"})
      return
    }
    if(totalNum === 0){
      await showToast({title:"请选择商品"})
      return
    }

    // 生成订单信息
    const gouwuchecart = wx.getStorageSync('gouwuchecart') || []
    const datagouwuche = gouwuchecart.filter(item => item.checked === true || item.checked === 1)
    let orderName = []
    let shopName = []
    let orderImage = 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3511062587,2622156531&fm=26&gp=0.jpg'
    gouwuchecart.map(item => {
      orderName.push(item.goods_name)
      shopName.push(item.shopName)
    })
    // 生成订单
    const {nickName} = wx.getStorageSync('userinfo')
    wx.request({
      url: 'http://127.0.0.1:8800/order',
      method:'post',
      data:{
        name:nickName,
        orderImage:orderImage,
        shopName:shopName.toString(),
        orderName:orderName.toString(),
        orderPay:this.data.totalPrice,
        orderNumber:this.data.totalNum,
        orderIden:(Date.now()).toString(),
        orderTime:moment().format('L')},
      success:res => {
        wx.showToast({
          title: '支付成功',
          icon:'success'
        })
        // console.log(res,'生成订单');
      }
    })
        // 3.跳到支付页面
    wx.navigateTo({
      url: '/pages/order/index',
    })
  },

})