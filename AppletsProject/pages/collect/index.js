// pages/collect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect:[],
    collectList:[
      {
        id:0,
        value:"商品收藏",
        isActive:true
      },
      {
        id:1,
        value:"品牌收藏",
        isActive:false
      },
      {
        id:2,
        value:"店铺收藏",
        isActive:false
      },
      {
        id:3,
        value:"浏览足迹",
        isActive:false
      }
    ]
  },
  onShow(){
    const collect = wx.getStorageSync('collect') || []
    this.setData({
      collect
    })
  },
  handleTablsItemChange(e){
    // console.log(e/);
    // 1.获取被点击的标题索引
    const index = e.detail
    // 2.修改原数组
    let {collectList} = this.data
    collectList.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
    // 3.赋值到data
    this.setData({
      collectList
    })
  },
  
  // 处理跳转事件
  bindViewTap(e){
    wx.navigateTo({
      url: '/pages/goods_detail/index?goods_name='+e.currentTarget.dataset.item.goods_name+'&goods_price='+e.currentTarget.dataset.item.goods_price+'&goods_small_logo='+e.currentTarget.dataset.item.goods_small_logo+'&pics_mid2='+e.currentTarget.dataset.item.pics_mid2+'&pics_mid3='+e.currentTarget.dataset.item.pics_mid3+'&pics_mid1='+e.currentTarget.dataset.item.pics_mid1+'&goods_id='+e.currentTarget.dataset.item.goods_id+'&goods_introduce='+encodeURIComponent(e.currentTarget.dataset.item.goods_introduce),
    })
    // console.log(e);
  }
})