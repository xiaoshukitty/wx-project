Page({
  data: {},

  onLoad(options) {

  },
  onShow() {

  },
  //点击了删除
  delOrder() {
    wx.showToast({
      title: '点击了删除',
      icon: 'none',
      duration: 2000
    })
  },

  //定位
  goToAddress() {
    console.log('22');
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        wx.openLocation({
          latitude: 30.544649,
          longitude: 114.302467,
          address: '小舒餐厅',
          scale: 18
        })
        console.log('res--', res);
      }
    })
  },

  //去点餐
  goToMenu() {
    wx.navigateTo({
      url: '/pages/index/menu/menu'
    })
  }

})