// /引用发送请求的方法
import {request} from "../../pages/request/index"
// 引用es7语法
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   goods:[],
    //  取消按钮
    isFocus:false,
    // 输入框的值
    inputVal:""
  },
  // 防抖 一般输入框中 防止重复输入 重复发送请求
  TimeId: -1,
  // 获取输入框的值
  handleInput(e){
    // console.log(e);
    // 1.获取输入框的值
    const {value} = e.detail
    // 2.检测合法性
    if(!value.trim()){
      this.setData({
        isFocus:false,
        goods:[]
      })
      //值不合法
      return
    }
    // 准备发送请求
    this.setData({
      isFocus:true
    })
    clearTimeout(this.TimeId)
    this.TimeId = setTimeout(()=>{
      this.questSearch(value)
    },1000)
  },
  // 发送请求数据
  async questSearch(goods_name){
     const res = await request({
       url:'/goodsDetailSearch',
       method:'POST',
       data:{
        goods_name
       }
     })
     this.setData({
      goods :res
     })
    //  console.log(res);
  },
    // 处理跳转事件
    bindViewTap(e){
      wx.navigateTo({
        url: '/pages/goods_detail/index?goods_name='+e.currentTarget.dataset.item.goods_name+'&goods_price='+e.currentTarget.dataset.item.goods_price+'&goods_small_logo='+e.currentTarget.dataset.item.goods_small_logo+'&pics_mid2='+e.currentTarget.dataset.item.pics_mid2+'&pics_mid3='+e.currentTarget.dataset.item.pics_mid3+'&pics_mid1='+e.currentTarget.dataset.item.pics_mid1+'&goods_id='+e.currentTarget.dataset.item.goods_id+'&goods_introduce='+encodeURIComponent(e.currentTarget.dataset.item.goods_introduce),
      })
      // console.log(e);
    },
    // 点击取消按钮
    hanldeCancel(){
      this.setData({
        inputVal:"",
        isFocus:false,
        goods:[]
      })
    }
})