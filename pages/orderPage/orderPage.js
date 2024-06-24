const app = getApp();
Page({
  data: {
    foodList: []
  },

  onLoad(options) {
   
  },
  onShow() {
    this.getFoodList();
  },
  //获取列表数据
  getFoodList() {
    let slet = this;
    const params = {

    }
    app.data.http.get('/orderList/getFoodList', params).then(res => {
      if (res.code == 200) {
        let result = res.data;
        for (let i = 0; i < result.length; i++) {
          result[i].order_data = JSON.parse(result[i].order_data)
        }
        slet.setData({
          foodList: result
        })
      }
    })
  },

  //点击了删除
  delOrder(e) {

    let slet = this;
    let params = {
      id: e.currentTarget.dataset.item.id,
    }
    app.data.http.get('/orderList/deleteFood', params).then(res => {
      if (res.code == 200) {
        wx.showToast({
          title: '点击了删除',
          icon: 'none',
          duration: 2000
        })
        slet.getFoodList();
      }
    })
  },

  //定位
  goToAddress() {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        wx.openLocation({
          latitude: 30.544649,
          longitude: 114.302467,
          address: '小舒餐厅',
          scale: 18
        })
      }
    })
  },

  //去点餐
  goToMenu(e) {
    let orderFoodList = encodeURIComponent(JSON.stringify(e.currentTarget.dataset.item.order_data));

    wx.navigateTo({
      url: `/pages/index/menu/menu?orderFoodList=${orderFoodList}`
    })
  },

  goToMap() {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
  },


})