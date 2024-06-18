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

  },

  //提交下单
  formSubmit() {
    let slet = this;
    let formInfo = slet.data.formInfo;
    let dishesStr = slet.data.dishesStr;


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
        console.log('获取到code:' + res.code)
        wx.request({
          url: 'http://192.168.2.102:3000/wxMsg/getOpenId',
          method: 'POST',
          data: {
            code: res.code
          },
          success: res => {
            console.log('res--', formInfo);
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
                  }
                }
              })
            }
          }
        })
      }
    })
  },


  //订阅消息
  allowSubscribeMessage() {
    wx.requestSubscribeMessage({
      tmplIds: [importance.tmplIds], // 在此处填写模板id
      success(res) {
        console.log('获取权限：', res)
      }
    })
  },
})