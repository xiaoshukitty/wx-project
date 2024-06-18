var app = getApp();
const importance = require('../../utils/importance.js');
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    formInfo: {
      storeName:'小舒餐厅',
      orderName: '小舒',
      dishes:'红烧茄子',
      submitDate: '2024-2-2',
      moeny: '20'
    }
  },

  onLoad(options) {
    // 1. 调用 wx.login() 方法获取登录登录凭证 code，code 有效期五分钟。
    // wx.login({
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
  },

  //获取个人微信头像昵称，新版本
  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail
    this.setData({
      avatarUrl,
    })
  },

  onShow() {
    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
    this.getTabBar().setData({
      tabbarIndex: 2
    })
  },

  //提交下单
  formSubmit() {
    let slet = this;
    const formInfo = slet.data.formInfo;
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

  getPhoneNumber(e) {
    // 自己微信要认证才能获取手机号授权，我这暂时用的是测试号授权的 
  },


  //去订单页面 
  goToOrder() {
    wx.navigateTo({
      url: '/pages/orderPage/orderPage',
    })
  },
})