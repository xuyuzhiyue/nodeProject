export const request = (params) => {
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
            }
        })
    })
}