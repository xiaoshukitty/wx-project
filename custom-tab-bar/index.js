const app = getApp();
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
    isIphoneX: app.globalData.isIphoneX, //获取机型
    tabbarIndex: 0, //当前在那个页面
    tabbarList: [{
      id: '0',
      text: '首页',
      pagePath: '/pages/index/index',
      iconPath: '/static/img/tabbar/home_no.png',
      selectedIconPath: '/static/img/tabbar/home_yes.png'
    }, {
      id: '1',
      text: '随机',
      pagePath: '/pages/random/random',
      iconPath: '/static/img/tabbar/random_no.png',
      selectedIconPath: '/static/img/tabbar/random_yes.png',
    }, {
      id: '2',
      text: '我的',
      pagePath: '/pages/mine/mine',
      iconPath: '/static/img/tabbar/mine_no.png',
      selectedIconPath: '/static/img/tabbar/mine_yes.png'
    }]
  },

  lifetimes: {
    attached: function () {},
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //tabbar 跳转
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      if(getCurrentPages()[0].route==url){
        return
      }
      
      
      wx.switchTab({
        url
      })
    }
  }
})