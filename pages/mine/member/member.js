const citySelector = requirePlugin('citySelector');
Page({
  data: {
    city: '' //选中的城市
  },
  // 从城市选择器插件返回后，在页面的onShow生命周期函数中能够调用插件接口，获取cityInfo结果对象
  onShow() {
    const selectedCity = citySelector.getCity(); // 选择城市后返回城市信息对象，若未选择返回null
    console.log("selectedCity===", selectedCity);
    if (selectedCity != null) {
      this.setData({
        city: selectedCity
      })
    }
  },
  onUnload() {
    // 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果
    citySelector.clearCity();
  },
  goChooseCity() {
    const key = 'XYBBZ-HC4CX-KBC4J-TMCM3-OZLX2-SVFGX'; // 使用在腾讯位置服务申请的key
    const referer = 'wx-project'; // 调用插件的app的名称
    const hotCitys = '北京,上海,武汉,重庆,广州,深圳,成都,杭州'; // 用户自定义的的热门城市
    wx.navigateTo({
      url: `plugin://citySelector/index?key=${key}&referer=${referer}&hotCitys=${hotCitys}`,
    })
  }
})