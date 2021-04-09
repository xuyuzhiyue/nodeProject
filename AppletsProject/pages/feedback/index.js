// pages/feedback/index.js
import {request} from "../../pages/request/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"商品问题意见",
        isActive:true
      },
      {
        id:1,
        value:"其他投诉",
        isActive:false
      }
    ],
    // 被选中的图片路径数组
    chooseImage:[],
    // 文本字符串
    textVal:'',
    // 动态给样式
    Goods:false,
    Pay:false,
    Other:false,
    Html:false
  },
  // 外网图片路径数组
  UpLoadImge:[],
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
  // 获取图片
  handleChooseImg(){
    wx.chooseImage({
      count:9,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:result=>{
        this.setData({
          // 把图片数组进行拼接
          chooseImage:[...this.data.chooseImage,...result.tempFilePaths]
        })
      }
    })
  },
  // 点击自定义组件删除
  handleRemoveImg(e){
    const {index} = e.currentTarget.dataset;
    let {chooseImage} = this.data
    chooseImage.splice(index,1)
    this.setData({
      chooseImage
    })
  },
  // 文本域
  handleTextInput(e){
    this.setData({
      textVal:e.detail.value
    })
  },
  // 提交按钮点击事件
  handleFormSubmit(){
    const {nickName} = wx.getStorageSync('userinfo')
    if(!nickName){
      wx.showToast({
        title: '请先登录',
        icon:'fail'
      })
      this.setData({disabled:true})
      return
    }
    let dataListStyle = []
    if(this.data.Goods === true) dataListStyle.push('商品问题')
    if(this.data.Pay === true) dataListStyle.push('退款问题')
    if(this.data.Html === true) dataListStyle.push('页面问题')
    if(this.data.Other === true) dataListStyle.push('其他问题')
    // console.log(dataListStyle,'dataListStyle');
    // 获取文本域内容
    const {textVal,chooseImage} = this.data
    // 合法性校验
    if(!textVal.trim()){
      // 不合法
      wx.showToast({
        title: '输入不合法',
        icon:'none',
        mask:true
      })
      return;
    }

    // 显示正在等待图片
    // wx.showLoading({
    //   title: '正在上传',
    //   mask:true
    // })
    // 需要把图片上传到专门的图片服务器
    if(chooseImage.length != 0 ){
      chooseImage.forEach((v,i) => {
      wx.uploadFile({
          filePath: v,
          name: 'imgfile',
          url: 'http://127.0.0.1:8800/upload',
          formData:{},
          success:result=>{
            const data =JSON.parse(result.data)
            const  imgUrl = data.imgUrl
            const {nickName} = wx.getStorageSync('userinfo')
            wx.request({
              url: 'http://127.0.0.1:8800/liuyan',
              method:'POST',
              data:{
                imgUrl:'C:\\Users\\fs1688\\Desktop\\node\\nodeProject\\goodsApi\\public\\upload\\'+imgUrl,
                content:textVal,
                type:dataListStyle[0]+'、'+dataListStyle[1]+'、'+dataListStyle[2]+'、'+dataListStyle[3],
                nickName:nickName
              },
              success:res=>{
                // console.log(res,'res');
                wx.showToast({
                  title: '提交成功',
                  icon:'success',
                  mask: true,
                })
              }
            })
          }
      })
      })
    }else{
      wx.showToast({
        title: '已经提交成功',
      })
    }
  },

  handleGoods(e){
    switch (e.currentTarget.dataset.index) {
      case '商品问题':
        const Goods = !this.data.Goods;
        this.setData({
          Goods
        });
          break;
      case '退款问题':
        const Pay = !this.data.Pay;
        this.setData({
          Pay
        });
           break;
      case '页面问题':
        const  Html = !this.data.Html;
        this.setData({
          Html
        });
            break;
      case '其他问题':
        const Other = !this.data.Other;
        this.setData({
          Other
        });
            break;
  }
  },
})