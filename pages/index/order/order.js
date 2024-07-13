const app = getApp();
const utils = require('../../../utils/index.js');
const importance = require('../../../utils/importance.js')
Page({

  data: {
    isIphoneX: app.globalData.isIphoneX, //获取机型
    orderList: [],
    total: '', //总价
    formInfo: {
      storeName: '小舒餐厅',
      orderName: '小舒',
      dishes: '红烧茄子',
      submitDate: '2024-2-2',
      moeny: '20'
    },
    dishesStr: '红烧茄子',
    remarkTips: '口味、偏好等要求'
  },

  onLoad(options) {
    let slet = this;
    const result = JSON.parse(decodeURIComponent(options.cartFoodList));

    const str = result.reduce((e, i) => {
      return e + '、' + i.name;
    }, '');
    slet.setData({
      orderList: result,
      total: options.total,
      dishesStr: str
    })
  },

  onShow() {
    let slet = this;
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1];

    if (currPage.data.remark) {
      slet.setData({
        remarkTips: currPage.data.remark,
      });
    }
  },

  //去地图
  goToMap() {
    wx.navigateTo({
      url: '/pages/map/map?type=purchase'
    })
  },

  //去备注页面
  goToRemark() {
    let slet = this;
    let remarkTips = slet.data.remarkTips;
    if (remarkTips != '口味、偏好等要求') {
      wx.navigateTo({
        url: `/pages/index/order/remark/index?remarkTips=${remarkTips}`,
      })
    } else {
      wx.navigateTo({
        url: './remark/index',
      })
    }
  },

  //提交下单
  formSubmit() {
    let slet = this;
    let formInfo = slet.data.formInfo;
    let dishesStr = slet.data.dishesStr;


    // wx.vibrateShort(); //震动

    formInfo = {
      storeName: '小舒餐厅',
      orderName: '小舒',
      dishes: dishesStr.substring(1),
      submitDate: utils.formatTime(),
      moeny: Number(slet.data.total).toFixed(2) + '元',
    }


    // 1. 调用 wx.login() 方法获取登录登录凭证 code，code 有效期五分钟。
    wx.login({
      timeout: 2000,
      // 成功后会返回code，将code提交给服务器
      success: res => {
        // 获取到code
        wx.request({
          url: 'http://192.168.2.102:3000/wxMsg/getOpenId',
          method: 'POST',
          data: {
            code: res.code
          },
          success: res => {
            wx.hideToast();
            if (res.data.request == 'ok') {
              wx.request({
                url: 'http://192.168.2.102:3000/wxMsg/sendTempMsg',
                method: 'POST',
                data: {
                  formInfo: formInfo
                },
                success: res => {
                  if (res.data.request === 'ok') {
                    wx.showToast({
                      title: '订阅消息发送成功',
                      icon: 'success'
                    })
                    setTimeout(() => {
                      wx.navigateBack({
                        delta: 1
                      })
                    }, 2000)
                  }
                }
              })
            }
          }
        })
      }
    })
  },

  //下单购买
  payOrder() {
    let slet = this;
    wx.showModal({
      title: '提示', //提示的标题
      content: '下单需要允许订阅通知这样才会收到菜品通知、请允许。菜马上做好、请稍等！', //提示的内容
      success: function (res) {
        if (res.confirm) {
          slet.allowSubscribeMessage();
        } else if (res.cancel) {}
      }
    })
  },

  //订阅消息
  allowSubscribeMessage() {
    let slet = this;
    wx.requestSubscribeMessage({
      tmplIds: [importance.tmplIds], // 在此处填写模板id
      success(res) {
        let result = res.Pbur9QdHiyABD54MGFrDUKhiLMHKOUOQLSWhMMePbQ4;
        if (result == 'accept') {
          slet.addFoodsList();
          wx.showToast({
            title: '正在下单~~~', //提示的内容
            duration: 2000, //持续的时间
            icon: 'loading', //图标有success、error、loading、none四种
            mask: true //显示透明蒙层 防止触摸穿透
          })

          slet.formSubmit();
        }
      }
    })
  },

  //下单
  addFoodsList() {
    let slet = this;
    let orderList = slet.data.orderList;
    let total = slet.data.total;
    let prarms = {
      order_date: utils.formatTime(),
      order_money: total,
      order_data: JSON.stringify(orderList),
    }
    app.data.http.post('/orderList/addFood', prarms).then(res => {
      if (res.code == 200) {}
    })
  }
})