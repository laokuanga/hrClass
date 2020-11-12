import http from '../../../utils/request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 推荐课程页码
     page:1,
     // 推荐课程数据
     recomData:[],
     // hr用户 和 非hr用户 类型 （10-hr用户，20-非hr用户）
     type:'10',
     // 一级分类数据
     oneRank:[],
     // 二级分类数据
     twoData:[],
     // 当前右边内容 显示 精品推荐 还是一级分类下面的所有分类(0 推荐 , 1 类目)
     is_show_right:0,
     // 点击左边当前item高亮显示
     activeItem:'rec'
  },
  // 点击三级分类  进入课程列表
  handleToCourseList(e){
    let id  =  e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/index/course_list/course_list?id=' + id,
    })
  },
  // 点击一级分类 获取 二级分类
  handleClikItem(e){
    // 一级分类id
    let id = e.currentTarget.dataset.id ? e.currentTarget.dataset.id : ''
    if(!id){
      this.getOneRankClass()
      this.setData({
        activeItem:'rec'
      })
    }else{
        http.post('course/child_category',{
          id:id
        }).then(res=>{
          this.setData({
            twoData:res.msg,
            is_show_right:1,
            activeItem:id
          })
        })
    }

  },
  // 获取一级分类
  getOneRankClass(){
    http.post('course/one_category',{
      type:this.data.type
    }).then(res=>{
      this.setData({
        oneRank:res.msg,
        is_show_right:0
      }) 
    })
  },
  // 获取推荐课程
  getRecomCourse(){
    http.post('course/recommend_course',{
      page:this.data.page,
      type:'10'
    }).then(res=>{
      this.setData({
        recomData:res.msg.data
      }) 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRecomCourse()
    this.getOneRankClass()

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