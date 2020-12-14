
// 1.用户上滑页面 滚动条触底  剋是加载下一页数据
// 1.找到滚动条触底事件
// 2.判断还有没有下一页数据
// 获取总页数 只有总条数
// 假设没有下一页数据 弹出一个提示
// 假如还有下一页数据 来加载下一页数据

// 2.下拉刷新页面
// 2.1 触发下拉刷新事件 需要在json页面的 添加 "enablePullDownRefresh": true,   "backgroundTextStyle": "dark"
// 增加页面的下拉事件 onPullDownRefresh
// 2.2 重置数据 数组
// 2.3重置页码 设置为1
// 2.4重新发送请求
// 数据请求回来 需要手动的关闭 等待效果

// /引用发送请求的方法
import {request} from "../../pages/request/index"
// 引用es7语法
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"
// pages/goods_list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:1,
        value:"销量",
        isActive:false
      },
      {
        id:2,
        value:"价格",
        isActive:false
      }
    ],
    goodsList:[]
  },

  Params:{
    goodsType:'',
    cat_type:'',
    pagenum:1,
    pagesize:10
  },
  // 总页数
  totalPages:1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Params.goodsType = options.goodsType,
    this.Params.cat_type = options.cat_type
    this.getGoodsList()

  },
  
  // 获取商品列表信息
  async getGoodsList(){
    const res = await request({
      url:"/goodsDetail2",
      method:"POST",
      data:this.Params
    })
    const total = res.total;
    // 计算总页数
    this.totalPages = Math.ceil(total / this.Params.pagesize)
    // console.log(this.totalPages);
    this.setData({
      // 拼接数组
      goodsList:[...this.data.goodsList,...res.goods]
    })
    console.log(res);

    // 关闭下拉刷新的窗口 
    wx.stopPullDownRefresh()
  },

  //标题的点击事件 从子组件传递过来
  handleTabsItemChange(e){
    // 获取被点击的标题索引  
    const index  = e.detail
  // // 修改源数组  
   let {tabs} = this.data
   tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
  //  console.log(tabs);
   this.setData({
     tabs
   })
   
  },

  // 滚动条触底事件
  onReachBottom(){
    // 判断还有没有下一页数据
    if(this.Params.pagenum >= this.totalPages){
      // 没有下页数据
      wx.showToast({
        title: '没有下一页数据',
      })
    }else{
      // 还有下一页数据
      this.Params.pagenum ++ ;
      this.getGoodsList()
    }
  },
  // 下拉刷新事件
  onPullDownRefresh(){
    // console.log("下拉刷新事件");
    // 1.重置数组
    this.setData({
      goodsList:[]
    })
    // 2.重置页面
    this.Params.pagenum = 1
    // 3.发送请求
    this.getGoodsList()
  }
})