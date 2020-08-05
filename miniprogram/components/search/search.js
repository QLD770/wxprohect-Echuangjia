// components/search/search.js

Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    isFocus : false,
    historyList : [],
    searchList : []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleFocus(){
      wx.getStorage({
       
      })

      this.setData({
        isFocus : true
      });
    },
    handleCancel(){
      this.setData({
        isFocus: false
      });
    },
    handleConfirm(ev){
      
    },
    handleHistoryDelete(){

    },
    changeSearchList(value){
 
    },
    handleHistoryItemDel(ev){

    }
  }
})
