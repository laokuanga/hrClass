import http from '../../utils/request/request'
//获取应用实例
const app = getApp()

Page({
  data: {
     // 轮播图数据
     bannerData:[],
     // 畅销好课数据
     listData:[]
  },
  onLoad: function () {
     this.getIndexBanner()
     this.getFluencyCourse()
  },
  // 点击畅销好课 list active item
  handleToCourseDetail(e){
    // 当前id
    let id = e.detail.id
    wx.navigateTo({
      url: '/pages/index/course_detail/course_detail',
    })
    
  },
  // 点击课程推荐
  handleToCourseRecom(){
     wx.navigateTo({
       url: '/pages/index/course_class/course_class',
     })
  },
  //获取畅销好课
  getFluencyCourse(){
    http.post('course/get_course',{
      num:'10',
      type:'10'
    }).then(res=>{
      this.setData({
        listData:res.msg
      })
    })
  },
  // 获取轮播图
  getIndexBanner(){
    http.post('index/index_banner',{})
    .then(res=>{
      this.setData({
        bannerData:res.msg
      })
    })
  },
  // 点击课程
  handleToCourseClass(){
    wx.navigateTo({
      url: '/pages/index/course_class/course_class',
    })
  },
  // 点击去优惠价页面
  handleToDiscounts(){
    wx.navigateTo({
      url: '/pages/index/concessional/concessional',
    })
  },
  // 点击去热门活动页面
  handleToHostActivity(){
    wx.navigateTo({
      url: '/pages/index/host_activity/host_activity',
    })
  },
  // 点击去资料推荐页面
  handleToRecomDatum(){
    wx.navigateTo({
      url: '/pages/index/datum_recom/datum_recom',
    })
  },
  // 点击去搜索页面
  handleToSarch(){
    wx.navigateTo({
      url: '/pages/index/search/search',
    })
  }
})
