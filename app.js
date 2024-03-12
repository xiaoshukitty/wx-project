App({
  data: {
    appversion: 'v1.0.0', //版本号
  },
  onLaunch() {

  },
  onShow: function () {
    let that = this
    // 获取设备机型
    wx.getSystemInfo({
      success: res => {
        let model = res.model.toLowerCase();
        if (res.safeArea.top > 20 && model.indexOf('iphone') > -1) { //x及以上的异形屏top为44，非异形屏为20
          that.globalData.isIphoneX = true;
        } else {
          that.globalData.isIphoneX = false;
        }
      }
    })
  },
  globalData: {
    isIphoneX: false, //判断机型
  }
})