//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    books: [],
    keyword: '',
    isbooks: 1,
    start:0
    
  },
  onReady: function (){
  },
  // onReachBottom: function (){
  //   wx.showLoading({
  //     title: '玩命加载中',
  //   })
  //   var this_ = this;
  //   this_.setData({
  //     start: ++this.data.start
  //   })
  //   wx.request({
  //     url: 'https://douban.uieee.com/v2/book/search',
  //     method: "GET",
  //     data: {
  //       q: this_.data.keyword,
  //       start: this_.data.start*20
  //     },
  //     header: {
  //       'content-type': 'application/xml' // 默认值
  //     },
  //     success: function (res) {
  //       if (res.data.count > 0) {
  //         this_.setData({
  //           books: this_.data.books.concat(res.data.books),
  //           isbooks: 2
  //         })
  //         wx.hideLoading();
  //       }else{
  //         wx.hideLoading();
  //         wx.showToast({
  //           title: '到底了',
  //           icon: 'none',
  //           duration: 2000
  //         })
  //       }
      
  //     },
  //   })
  // },
  // 上拉刷新
  onPullDownRefresh: function (){
    var _this  = this;
    if(!_this.data.keyword) {
        wx.showToast({
          title: '关键字不能为空',
          icon: 'none',
          duration: 2000
        })
         // 隐藏导航栏加载框
         wx.hideNavigationBarLoading();
         // 停止下拉动作
         wx.stopPullDownRefresh();
        return false;
    }
    wx.request({
      url: 'https://douban.uieee.com/v2/book/search',
      method: "GET",
      data: {
        q: _this.data.keyword
      },
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success: function (res) {
        if (res.data.count > 0) {
          _this.setData({
            books: res.data.books,
            isbooks: 2
          })
        } else {
          _this.setData({
            books: [],
            isbooks: 3
          })
        }
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      },
    })
  },
  lower: function() {
    wx.showLoading({
      title: '玩命加载中',
    })
    var this_ = this;
    this_.setData({
      start: ++this.data.start
    })
    wx.request({
      url: 'https://douban.uieee.com/v2/book/search',
      method: "GET",
      data: {
        q: this_.data.keyword,
        start: this_.data.start*20
      },
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success: function (res) {
        if (res.data.count > 0) {
          if(this_.data.books.length < 10) {
            wx.hideLoading();
            wx.showToast({
              title: '到底了',
              icon: 'none',
              duration: 2000
            })
            return
          }
          this_.setData({
            books: this_.data.books.concat(res.data.books),
            isbooks: 2
          })
          wx.hideLoading();
        }else{
          wx.hideLoading();
          wx.showToast({
            title: '到底了',
            icon: 'none',
            duration: 2000
          })
        }
      
      },
    })
  },
  setKeyword: function (e){
    this.setData({
      keyword: e.detail.value,
      start: 0
    })
  },
  getList: function (e){
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
    wx.showLoading({
      title: '玩命加载中',
    })
    var this_ = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/book/search',
      method: "GET",
      data: {
        q: this.data.keyword
      },
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success: function (res) {
        if(res.data.count > 0){
          this_.setData({
            books: res.data.books,
            isbooks: 2
          })
          wx.hideLoading();
        }else{
          this_.setData({
            books: [],
            isbooks: 3
          })
          wx.hideLoading();
        }
      },
    })
  },
  toSubject: function (e) {
    wx.navigateTo({
      url: '../subject/subject?id='+e.currentTarget.dataset.id
    })
  },
  /**
   * 用户点击右上角分享
   */
    onShareAppMessage: function () {
      return {

          title: '小白搜书😄😄😄',

          desc: '测试测试测试测试',

          path: '/pages/index/index'

      }

  }
})
