// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbotu:[
      "/images/banner/b1.jpg",
      "/images/banner/b2.jpg",
      "/images/banner/b3.jpg",
      "/images/banner/b4.jpg",
      "/images/banner/b5.jpg"
    ],
    postsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPost();
  },
  gotoPosts(event){
    //获取当前点击文章的id
    let id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/ci/ci?postid='+id,
      })
  },
    // 获取文章列表
    getPost(){
      wx.request({
        url: 'https://www.fastmock.site/mock/576b1fb3e258cc864eb96c47fa9b8e4b/shouye-server/api/post',
        method:"GET",
        success:(res)=>{
          this.setData({
            postsList:res.data.data
          }),
          // 关闭加载中提示框
          wx.hideLoading()
        },
        fail:()=>{
          console.log(err);
        }
      })
    },

  // 点击放大图
  previewAvatar(event){
    console.log(event);
    wx.previewMedia({
      sources:[
        {url:event.target.dataset.src}
      ]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title:'加载中'
    }),
    this.getPost()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})