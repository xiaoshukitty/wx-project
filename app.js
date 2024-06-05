const http = require('./utils/request.js')
App({
  data: {
    appversion: 'v1.0.2', //版本号
    http: http,
  },
  onLaunch() {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
      wx.showModal({
        title: '更新提示',
        content: '新版本下载失败',
        showCancel: false
      })
    })
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