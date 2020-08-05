//index.js
//获取应用实例
// var app = getApp();
Page({
  data: {
    indexmenu:[],
    imgUrls: []
  },
  onLoad:function(){
    //生命周期函数--监听页面加载
    this.fetchData();
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  fetchData:function(){
    this.setData({
      indexmenu:[
        {
          'icon':'./../../images/icon_01.png',
          'text':'众创空间',
          'url':'space'
        },
        {
          'icon':'./../../images/icon_03.png',
          'text':'服务集市',
          'url':'service'
        },
        {
          'icon':'./../../images/icon_05.png',
          'text':'会议室预定',
          'url':'conference'
        },
        {
          'icon':'./../../images/icon_07.png',
          'text':'云资源申请',
          'url':'resource'
        },
        {
          'icon':'./../../images/icon_09.png',
          'text':'园区问问',
          'url':'question'
        },
        {
          'icon':'./../../images/icon_11.png',
          'text':'物业服务',
          'url':'property'
        },
        {
          'icon':'./../../images/icon_13.png',
          'text':'入驻申请',
          'url':'apply'
        }
      ],
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596639666338&di=ebc9754ce05e45da1211ce8e41c21681&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1026101727%2C3357097158%26fm%3D214%26gp%3D0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596639576847&di=c35f8b401e75808f835b42f1714623d4&imgtype=0&src=http%3A%2F%2Fimg.businessvalue.com.cn%2Fuploads%2Fimages%2F2015%2F11%2Fmp21424108_1436170404265_4_th_fv23.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596639576844&di=f7718a8e3baa7b6c545ff383e045a2f6&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180104%2F87ea1c0fc3ac411ea40a2d0444d3c18a.jpeg'
      ]
    })
  },
  changeRoute:function(url){
    wx.navigateTo({
      url: `../${url}/${url}`
    })
  },
  onReady:function(){
    //生命周期函数--监听页面初次渲染完成
    // console.log('onReady');
  },
  onShow :function(){
    //生命周期函数--监听页面显示
    // console.log('onShow');
  },
  onHide :function(){
    //生命周期函数--监听页面隐藏
    // console.log('onHide');
  },
  onUnload :function(){
    //生命周期函数--监听页面卸载
    // console.log('onUnload');
  },
  onPullDownRefresh:function(){
    //页面相关事件处理函数--监听用户下拉动作
    // console.log('onPullDownRefresh');
  },
  onReachBottom:function(){
    //页面上拉触底事件的处理函数
    // console.log('onReachBottom');
  }
})
