// /引用发送请求的方法
import { request } from "../../pages/request/index.js"
// 引用es7语法
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"
Page({
  data: {
    //  轮播图数据
    swiperList: [],
    // 导航数据
    catesList: [],
    // 楼层数据
    floorList:[]
  },

  //  页面开始加载 就会触发
  onLoad: function (option) {
    // 1.发布异步请求数据获取轮播图数据  优化的手段可以通过es6语法 promise来解决问题
    // wx.request({
    //   url: 'http://127.0.0.1:8800/rotationChart',
    //   success:result=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // })
    this.getSwiperList()
    this.getCateList()
    this.getFloorList()
  },
  // 获取轮播图数据
  getSwiperList() {
    request({
      url: '/rotationChart'
    }).then(result => {
      this.setData({
        swiperList: result
      })
    })
  },
  // 获取分类导航数据
  getCateList() {
    request({
      url: '/navigation'
    }).then(result => {
      this.setData({
        catesList: result
      })
    })
  },
    // 获取楼层数据
    getFloorList() {
      request({
        url: '/floor'
      }).then(result => {
        this.setData({
          floorList: result
        })
      })
    },
    // 处理轮播图跳转事件
    Params:{
      goodsType:'',
      cat_type:'',
      pagenum:1,
      pagesize:10
    },
    async bindViewTap(e){
    console.log(e);
    this.Params.goodsType = e.currentTarget.dataset.item.goodsType
    this.Params.cat_type = e.currentTarget.dataset.item.cat_type
    // const goods_id = e.currentTarget.dataset.item.goods_id
    let itemGoods = await request({
      url:"/goodsDetail2",
      method:"POST",
      data:this.Params
    })
    let item = []
    itemGoods.goods.forEach(v =>{
      if(v.goodsType === this.Params.goodsType && v.cat_type === this.Params.cat_type ){
        item.push(v)
      }
      return
    })
    // console.log(item);
      wx.navigateTo({
        url: '/pages/goods_detail/index?goods_name='+item[0].goods_name+'&goods_price='+item[0].goods_price+'&goods_small_logo='+item[0].goods_small_logo+'&pics_mid2='+item[0].pics_mid2+'&pics_mid3='+item[0].pics_mid3+'&pics_mid1='+item[0].pics_mid1+'&goods_id='+item[0].goods_id+'&goods_introduce='+encodeURIComponent(item[0].goods_introduce)
     })
  }
})