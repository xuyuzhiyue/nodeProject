// pages/feedback/index.js
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
            // console.log(data,imgUrl);

            //所有的图片都上传完毕了才触发
            // if(i===chooseImage.length-1){
            //   wx.hideLoading()
            //   // 提交到后台中
            //   wx.showToast({
            //     title: '已经提交成功',
            //   })
            //   // console.log('');
            //   // 重置页面
            //   this.setData({
            //     textVal:'',
            //     chooseImage:[]
            //   })
            //   // 返回上一个页面
            //   wx.navigateBack({
            //     delta:1
            //   })
            // }
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