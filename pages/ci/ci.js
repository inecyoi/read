// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.postid
    wx.request({
      url: 'https://www.fastmock.site/mock/576b1fb3e258cc864eb96c47fa9b8e4b/shouye-server/api/posts/'+id,
      success:(res)=>{
        this.setData({
          post:res.data.data
        })
      }
    })
  },
  gotoPosts(){

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})