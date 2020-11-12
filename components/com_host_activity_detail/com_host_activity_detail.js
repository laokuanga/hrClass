// components/com_host_activity_detail/com_host_activity_detail.js
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
    // 点击去报名
    handleToActivityApply(){
      wx.navigateTo({
        url: '/pages/index/activity_apply/activity_apply',
      })
    }
  }
})
