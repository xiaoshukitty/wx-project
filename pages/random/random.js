Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad(options) {

  },
  onShow() {
    let that = this;
    if (typeof that.getTabBar === 'function') {
      that.getTabBar().setData({
        tabbarIndex: 1
      })
    }
    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态

  },
  skip(e) {
    console.log('e---', e);
    const route = e.currentTarget.dataset.skip;
    console.log('e---', route);
    wx.navigateTo({
      url: route
    })
  }
})