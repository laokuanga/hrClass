// pages/index/concessional/concessional.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否显示领取成功 提示
    is_show_get:false

  },
  // 点击关闭领取成功提示框
  handleEscBtn(){
    this.setData({
      is_show_get:false
    })
    console.log('123')
  },
  // 点击领取成功提示框里的 去使用 返回首页
  handleToIndex(){
    this.setData({
      is_show_get:false
    })
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  // 子组件传递过来的 领取会员事件
  handleNowGet(){
     this.setData({
      is_show_get:true
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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