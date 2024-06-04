const app = getApp();
Page({

  data: {
    isIphoneX: app.globalData.isIphoneX, //获取机型
    orderList: [],
    total:'',//总价
  },

  onLoad(options) {
    let slet = this;
    slet.setData({
      orderList: JSON.parse(options.cartFoodList),
      total:options.total
    })
    console.log(slet.data.orderList);
  },

  onShow() {

  },


})