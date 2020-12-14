// 同时发送异步代码的次数
let ajaxTime = 0

export const request = (params) => {
   ajaxTime ++;

    // 显示加载中 效果
    wx.showLoading({
        title: '加载中',
        mask:true
      })

    //定义公共的url 
    const baseUrl =  "http://127.0.0.1:8800"
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url:baseUrl+params.url,
            success: (result) => {
                resolve(result.data.message)
            },
            fail: err => {
                reject(err)
            },
            complete:()=>{
                ajaxTime --;
               if(ajaxTime === 0){
                  // 关闭正在等待的图标
                  wx.hideLoading()
               }
            }
        })
    })
}