import http from '../../../utils/request/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
     //是否展开筛选功能
     is_show_screen_open:false,
     // 当前三级列表 id
     id:null,
     // 列表 page
     page:1,
     // 当前课程列表
     listData:[]
  },
   // 获取课程列表
   getActiveList(){
    http.post('course/category_course',{
      id:this.data.id,
      page:this.data.page
    }).then(res=>{
      this.setData({
        listData:res.msg.data
      })
    })
   },
   // 点击 蒙层 关闭
   handleEscPop(){
    this.setData({
      is_show_screen_open:false
    })
   },
   // 点击筛选
   handleOpenScreen(){
      this.setData({
        is_show_screen_open:true
      })
   }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
      id:options.id
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
    this.getActiveList()
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