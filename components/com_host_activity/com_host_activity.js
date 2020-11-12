// components/com_host_activity/com_host_activity.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
     // 点击进入活动详情
     handleToHostDeatil(){
       wx.navigateTo({
         url: '/pages/index/host_activity_detail/host_activity_detail',
       })
     }
  }
})
