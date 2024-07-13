Page({

  data: {

  },

  onLoad(options) {
    wx.onNetworkStatusChange(function (res) {
      console.log(res.isConnected)
      console.log(res.networkType)
    })
  },
})