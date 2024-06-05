const app = getApp();
Page({

  data: {
    isIphoneX: app.globalData.isIphoneX, //获取机型
    orderList: [],
    total: '', //总价
  },

  onLoad(options) {
    let slet = this;
    const result = JSON.parse(decodeURIComponent(options.cartFoodList));
    console.log('res--', result);
    slet.setData({
      orderList:result ,
      total: options.total
    })
    // console.log('222222', (slet.data.orderList));


  },

  onShow() {

  },


})