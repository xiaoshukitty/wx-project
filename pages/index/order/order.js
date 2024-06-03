Page({

  data: {
    orderList: []
  },

  onLoad(options) {
    let slet = this;
    slet.setData({
      orderList: JSON.parse(options.cartFoodList)
    })
    console.log(slet.data.orderList);
  },

  onShow() {

  },


})