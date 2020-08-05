import util from './../../utils/util.js';
Page({
  data: {
    filterdata:{},  //筛选条件数据
    showfilter:false, //是否显示下拉筛选
    showfilterindex:null, //显示哪个筛选类目
    sortindex:0,  //排序索引
    sortid:null,  //排序id
    filter:{},
    conferencelist:[], //会议室列表列表
    scrolltop:null, //滚动位置
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchConferenceData();
    this.fetchFilterData();
  },
  fetchFilterData(){ //获取筛选条件
    this.setData({
      filterdata:{
        "sort": [
            {
                "id": 0,
                "title": "价格最低"
            },
            {
                "id": 1,
                "title": "容量最多"
            },
            {
                "id": 2,
                "title": "设备最全"
            },
        ],
        "contain": [
            {
                "id": 0,
                "title": "4人以下"
            },
            {
                "id": 1,
                "title": "5-8人"
            },
            {
                "id": 2,
                "title": "8-12人"
            },
             {
                "id": 3,
                "title": "12-20人"
            },
            {
                "id": 4,
                "title": "20人以上"
            },
        ],
        "equipments": [
            {
                "id": 0,
                "title": "投影仪"
            },
            {
                "id": 1,
                "title": "欢迎屏"
            },
            {
                "id": 2,
                "title": "视屏设备"
            },
            {
                "id": 3,
                "title": "电话会议设备"
            },
            {
                "id": 4,
                "title": "钢笔"
            },
            {
                "id": 5,
                "title": "麦克风"
            },
        ],
      }
    })
  },
  fetchConferenceData(){  //获取会议室列表
    const perpage = 10;
    this.setData({
      page:this.data.page+1
    })
    const page = this.data.page;
    const newlist = [];
    for (var i = (page-1)*perpage; i < page*perpage; i++) {
      newlist.push({
        "id":i+1,
        "name":"A区会议室"+(i+1),
        "contain": Math.floor(Math.random()*50),
        "area": Math.floor(Math.random()*(200-20)+20),
        "price" : Math.floor(Math.random()*50)*10,
        "equipments":util.getRandomArray(["投影仪","欢迎屏","视屏设备","电话会议设备","钢笔","麦克风"],Math.floor(Math.random()*6)),
        "imgurl":util.getRandomArrayElement(["http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/46932530-4bc8-48dc-bf10-1e5e39d254b8_750x470.png","http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/73efa039-6c54-43c6-8ad9-70f831723e2e_750x470.png","http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/eb8bbf4d-e236-4c92-900c-67d8b941b02a_750x470.png"])
      })
    }
    this.setData({
      conferencelist:this.data.conferencelist.concat(newlist)
    })
  },
  setFilterPanel: function(e){ //展开筛选面板
    const d = this.data;
    const i = e.currentTarget.dataset.findex;
    if(d.showfilterindex == i){
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
    }else{    
      this.setData({
        showfilter: true,
        showfilterindex:i,
      })
    }
  },
  hideFilter: function(){ //关闭筛选面板
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
  },
  setSort(e){ //选择排序方式
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      sortindex:dataset.sortindex,
      sortid:dataset.sortid
    })
    console.log('排序方式id：'+this.data.sortid);
  },
  inputStartTime(e){
    this.setData({
      filter: Object.assign({},this.data.filter,{
        starttime:e.detail.value
      })
    })  //输入会议开始时间
  },
  inputEndTime(e){
    this.setData({
      filter: Object.assign({},this.data.filter,{
        endtime:e.detail.value
      })
    })  //输入会议结束时间
  },
  chooseContain(e){  //选择会议室容纳人数
    this.setData({
      filter: Object.assign({},this.data.filter,{
        containid:e.currentTarget.dataset.id
      })
    })
    console.log('选择的会议室容量id：'+this.data.filter.containid);
  },
  chooseEquipment(e){  //选择会议室设备
    const equipments = this.data.filter.equipments || [];
    const eid = e.currentTarget.dataset.id;
    this.setData({
      filter: Object.assign({},this.data.filter,{
        equipments:equipments.indexOf(eid)>-1 ? equipments.filter(i=>i!=eid):equipments.concat([eid])
      })
    })
    console.log('选择的会议室设备id：'+this.data.filter.equipments);
  },
  setClass(e){ //设置选中设备样式
    return this.data.filter.equipments.indexOf(e.currentTarget.dataset.id)>-1?'active':''
  },
  cleanFilter(){ //清空筛选条件
    wx.showModal({
      title:'确定清空所选内容吗？',
      success:(res)=>{
        if(res.confirm){
          this.setData({
            filter:{}
          })
        }else if(res.cancel){
          // 用户点击取消
          console.log('用户点击取消')
        }
      }
    })
  },
  submitFilter(){ //提交筛选条件
    wx.showLoading({
      title: '预定中',
    })
    setTimeout(()=>{
      wx.hideLoading()
      wx.showToast({
        title:'预订成功'
      })
    },1000)
    console.log(this.data.filter);
  },
  scrollHandle(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  goToTop(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
  scrollLoading(){ //滚动加载
    this.fetchConferenceData();
  },
  onPullDownRefresh(){ //下拉刷新
    this.setData({
      page:0,
      conferencelist:[]
    })
    this.fetchConferenceData();
    this.fetchFilterData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})