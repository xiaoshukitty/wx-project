//获取应用实例
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //导航栏颜色
    navColor: {
      type: String,
      // value: '#fff'
    },
    type: {
      type: String,
      value: 'pages/index/menu/menu'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    s: app.globalData.system.statusBarHeight, //状态栏高度
    n: (app.globalData.capsule.top - app.globalData.system.statusBarHeight) * 2 + app.globalData.capsule.height, //导航栏高度
    h: app.globalData.capsule.height //胶囊高度
  },
  methods: {
    //返回上一页
    toBack() {
      this.triggerEvent('toBack');
    }
  }

})