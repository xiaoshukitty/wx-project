var app = getApp();
Page({
  data: {
    isIphoneX: app.globalData.isIphoneX, //获取机型
    background: ['https://cos3.solepic.com/20211003/b_5589972202110031536255943.jpg', 'https://cos3.solepic.com/20211201/b_5597058202112011409047505.jpg', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2FO1CN01EoKiBB1rAj9GcxNtG_%21%212211865615591-0-cib.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1720680461&t=1879ef3d30b42b35d03f6d1c06fe5132', 'https://cos3.solepic.com/20211125/b_5645585202111251124574014.jpg', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi4%2F2533472084%2FO1CN01koyPy71RGVuvNhzaF_%21%212533472084.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1720680502&t=34677c209d47d2c42969e52b746dfc17'],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },

  onLoad: function () {},

  // 去我页面
  goToMe() {
    wx.switchTab({
      url: '/pages/mine/mine'
    })
  },
  //去点餐页面
  goToMenu(){
    wx.navigateTo({
      url: '/pages/index/menu/menu',
    })
  },
});