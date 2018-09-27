Page({
    data: {
        list: []
    },
    onReady: function (){
        const id =  this.data.id;
        let _this = this
        wx.request({
            url: 'https://douban.uieee.com/v2/book/top250',
            method: "GET",
            header: {
              'content-type': 'application/xml' // 默认值
            },
            success: function (res) {
                console.log(res.data)
                _this.setData({
                    list: res.data
                })
            },
        })
    },
})