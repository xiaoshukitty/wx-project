Page({

  data: {
    num: 0,
    value: ''
  },

  onLoad(options) {
    let slet = this;
    if (options.remarkTips) {
      slet.setData({
        value: options.remarkTips,
        num: options.remarkTips.length,
      })
    }
  },

  onShow() {

  },

  bindinput(e) {
    this.setData({
      num: e.detail.value.length,
      value: e.detail.value
    })
  },
  btn() {
    var pages = getCurrentPages(); //当前页面
    var prevPage = pages[pages.length - 2]; //上一页面
    prevPage.setData({
      //直接给上一个页面赋值
      remark: this.data.value
    });
    wx.navigateBack({
      delta: 1
    })
  }

})