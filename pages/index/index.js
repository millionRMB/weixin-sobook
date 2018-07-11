//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    books: [],
    keyword: '',
    isbooks: 1
  },
  getList: function(e){
    if(e.detail.value.length == 0){
      wx.showToast({
        title: '关键字不能为空',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    this.setData({
      keyword: e.detail.value
    });
    var this_ = this;
    wx.request({
      url: 'http://www.bai3.xyz:3000/api/search',
      method: "GET",
      data: {
        kw: this.data.keyword
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.data.code == 200){
          this_.setData({
            books: res.data.data,
            isbooks: 2
          })
        }else if(res.data.code == 201){
          this_.setData({
            books: [],
            isbooks: 3
          })
        }
      },
    })
  },
})
