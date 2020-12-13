
// 1.用户上滑页面 滚动条触底  剋是加载下一页数据
// 1.找到滚动条触底事件
// 2.判断还有没有下一页数据
// 假设没有下一页数据 弹出一个提示
// 假如还有下一页数据 来加载下一页数据

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
    this.setData({
      goodsList:res.goods
    })
    console.log(res);
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
    console.log('触发事件');
  }
})