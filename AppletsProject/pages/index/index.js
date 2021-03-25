// /引用发送请求的方法
import { request } from "../../pages/request/index.js"
// 引用es7语法
import regeneratorRuntime from "../../pages/lib/runtime/runtime.js"
Page({
  data: {
    //  轮播图数据
    swiperList: [],
    // 导航数据
    // catesList: [],
    // 楼层数据
    // floorList:[],
    tabs:[
      {
        id:0,
        value:"综合商品",
        isActive:true
      },
      {
        id:1,
        value:"热销商品",
        isActive:false
      }
    ],
    comprehensiveData:[],
    comprehensiveOrderBy:[]
  },

  //  页面开始加载 就会触发
  onLoad: function (option) {
    this.getSwiperList()
    this.comprehensive()
    this.comprehensiveOrderBy()
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
  // 获取热销商品
  async comprehensiveOrderBy(){
    const  comprehensiveOrderBy = await request({url:"/comprehensiveOrderBy"})
    this.setData({
      comprehensiveOrderBy
    })
   //  console.log(data);
 },
  // 获取综合商品数据
  async comprehensive(){
     const  comprehensiveData = await request({url:"/comprehensive"})
     this.setData({
      comprehensiveData
     })
    //  console.log(data);
  },

    Params:{
      goodsType:'',
      cat_type:'',
      pagenum:1,
      pagesize:10
    },
    // 轮播图跳转
    async bindViewTap(e){
    // console.log(e);
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
  },

  // 综合商品和日销商品跳转
  async bindleFloor(e){
    this.Params.goodsType = e.currentTarget.dataset.item.goodsType
    this.Params.cat_type = e.currentTarget.dataset.item.cat_type
    // let itemGoods = await request({
    //   url:"/goodsDetail2",
    //   method:"POST",
    //   data:this.Params
    // })
    // let item = []
    // itemGoods.goods.forEach((v,index) =>{
    //   if(v.goodsType === this.Params.goodsType && v.cat_type === this.Params.cat_type ){
    //     v.index = index
    //     item.push(v)
    //   }
    //   return
    // })
    // console.log(item,'item');
      wx.navigateTo({
        url: '/pages/goods_detail/index?goods_name='+ e.currentTarget.dataset.item.goods_name+'&goods_price='+ e.currentTarget.dataset.item.goods_price+'&shopName='+ e.currentTarget.dataset.item.shopName+'&goods_small_logo='+ e.currentTarget.dataset.item.goods_small_logo+'&pics_mid2='+ e.currentTarget.dataset.item.pics_mid2+'&pics_mid3='+ e.currentTarget.dataset.item.pics_mid3+'&pics_mid1='+ e.currentTarget.dataset.item.pics_mid1+'&goods_id='+ e.currentTarget.dataset.item.goods_id+'&goods_introduce='+encodeURIComponent( e.currentTarget.dataset.item.goods_introduce)
     })
  },
   //标题的点击事件 从子组件传递过来
   handleTabsItemChange(e){
    // 获取被点击的标题索引  
    const index  = e.detail
  // // 修改源数组  
   let {tabs} = this.data
   tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
   this.setData({
     tabs
   })
  },
})