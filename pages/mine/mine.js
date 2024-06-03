// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad(options) {
    // 1. 调用 wx.login() 方法获取登录登录凭证 code，code 有效期五分钟。
    wx.login({
      success: (res) => {
        console.log(res);
      }
    })

  },

  onShow() {
    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
    this.getTabBar().setData({
      tabbarIndex: 2
    })
  },
  getPhoneNumber(e) {
    // 自己微信要认证才能获取手机号授权，我这暂时用的是测试号授权的 
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },
  onShareAppMessage() {

  }
})