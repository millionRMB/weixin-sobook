//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    books: [{ "id": 20, "url": "https://book.douban.com/subject/3259440/", "isbn": 9787544242516, "name": "白夜行", "author": "[日]东野圭吾", "image": "https://img3.doubanio.com/view/subject/l/public/s4610502.jpg", "publisher": " 南海出版公司", "pubdate": " 2008-9", "price": " 29.80元", "rating": 9.1 }, { "id": 4649, "url": "https://book.douban.com/subject/26927491/", "isbn": 9787550292581, "name": "白夜照相馆", "author": "新浪潮文学", "image": "https://img1.doubanio.com/view/subject/l/public/s29436947.jpg", "publisher": " 北京联合出版公司/联合读创", "pubdate": " 2017-1", "price": " 38", "rating": 6.8 }, { "id": 4805, "url": "https://book.douban.com/subject/21993104/", "isbn": 9787532760596, "name": "白夜", "author": "[俄]费奥多尔·陀思妥耶夫斯基", "image": "https://img3.doubanio.com/view/subject/l/public/s27319742.jpg", "publisher": " 上海译文出版社", "pubdate": " 2013-4", "price": " 22.00元", "rating": 8.1 }]
  },
})
