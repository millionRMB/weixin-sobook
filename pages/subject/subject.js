Page({
    data: {
        id: '',
        detail: []
    },
    
    onLoad: function (options) {
        // console.log(options)    
        // let  _this = this;
        // _this.setData({
        //     id: options.id
        // })
    },
    onReady: function (){
        const id =  this.data.id;
        let _this = this
        wx.request({
            url: 'https://douban.uieee.com/v2/book/3259440',
            method: "GET",
            header: {
              'content-type': 'application/xml' // 默认值
            },
            success: function (res) {
                console.log(res.data)
                _this.setData({
                    detail: res.data
                })
            },
        })
    },
})