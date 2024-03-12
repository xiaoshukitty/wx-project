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
    color: "#fff",
    selectedColor: "#6777FD",
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
    // toLink(e) {
    //   let that = this;
    //   let index = e.currentTarget.dataset.index;
    //   let path = e.currentTarget.dataset.item.pagePath;
    //   // let currentIndex = that.data.tabbarIndex;
    //   // if (index == currentIndex) return;
    //   // that.setData({
    //   //   tabbarIndex: index
    //   // })
    //   // wx.navigateTo({
    //   //   url: path,
    //   // })
    //   wx.switchTab({
    //     path
    //   })
    // }
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data);
      const url = data.path

      wx.switchTab({
        url
      })
      this.setData({
        tabbarIndex: data.index
      })
      console.log('this.', this.data.tabbarIndex);
    }
  }
})