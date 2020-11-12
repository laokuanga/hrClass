// components/com_list/com_list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData:{
       type:Array
    }
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
    // 传递点击当前item 给父组件
    handleToCourseDetail(e){
      let id  = e.currentTarget.dataset.id
       this.triggerEvent('handleToCourseDetail',{id:id})
    }
  }
})
