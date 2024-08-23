var hb_img = ''; //生成的海报
var app = getApp();
const importance = require('../../utils/importance.js');
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    formInfo: {
      storeName: '小舒餐厅',
      orderName: '小舒',
      dishes: '红烧茄子',
      submitDate: '2024-2-2',
      moeny: '20'
    },
    show: false,
    nickname: '',
    avatar: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    isQRCode: false,
    isShow: false, //是否显示海报
    urlCode: '/static/img/me/myWXQRcode.png', //二维码
    userinfo: {
      avatar: '/static/img/me/head_portrait .png',
      nickname: '小舒'
    },
    goodsInfo: {
      goodsImg: '/static/img/me/background.jpg',
      goodsName: '本是椿花楸月、奈何北冥有鱼 🍂🍃',
    }
  },

  onLoad(options) {
    // 1. 调用 wx.login() 方法获取登录登录凭证 code，code 有效期五分钟。
    // wx.login({
    //   success: (res) => {
    //   }
    // })
  },


  onShow() {
    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
    this.getTabBar().setData({
      tabbarIndex: 2
    })
  },

  //获取头像
  openAvatar() {
    this.setData({
      show: true
    })
  },
  // 点击生成海报
  generatePoster() {
    wx.showLoading({
      title: '生成海报中~~',
      mask: true,
    })
    let slet = this;
    slet.setData({
      isShow: true,
      hidden: 'hidden'
    })

    let urlCode = slet.data.urlCode;
    wx.createSelectorQuery().select('#myCanvas')
      .fields({
        node: true,
        size: true
      })
      .exec(async (res) => {
        const cvs = res[0].node;
        let width = res[0].width;
        let height = res[0].height;
        cvs.width = 550;
        cvs.height = 900;
        const ctx = cvs.getContext('2d');
        let goodsInfo = slet.data.goodsInfo;


        const imageData = ctx.getImageData(0, 0, cvs.width, cvs.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
          // 当该像素是透明的，则设置成白色
          if (imageData.data[i + 3] === 0) {
            imageData.data[i] = 255;
            imageData.data[i + 1] = 255;
            imageData.data[i + 2] = 255;
            imageData.data[i + 3] = 255;
          }
        }
        ctx.putImageData(imageData, 0, 0);
        ctx.save(); //保存当前的状态

        const img0 = cvs.createImage()
        await new Promise(resolve => {
          img0.onload = resolve
          img0.src = goodsInfo.goodsImg
        })
        ctx.drawImage(img0, 0, 0, 550, 550);

        ctx.font = '21px 微软雅黑'
        ctx.fillText(goodsInfo.goodsName, 100, 610);

        const img = cvs.createImage()
        await new Promise(resolve => {
          img.onload = resolve
          img.src = urlCode
        })
        ctx.drawImage(img, 195, 660, 160, 160);

        ctx.font = '21px 微软雅黑'
        ctx.fillText('长按识别二维码', 195, 860);

        //base64转换成临时路径（type=2d：wx.canvasToTempFilePath不用放在draw()回调,通过getContext('2d')获取上下文没有draw方法）
        wx.canvasToTempFilePath({
          canvas: cvs, //画布标识，传入 [canvas] 组件实例 （canvas type="2d" 时使用该属性）。
          success: (res) => {
            wx.hideLoading();
            hb_img = res.tempFilePath;
          }
        })
      })
  },

  // 点击保存图片
  savePoster() {
    let slet = this;
    console.log('22', hb_img);
    //画板路径保存成功后，调用方法把图片保存到用户相册
    wx.saveImageToPhotosAlbum({
      filePath: hb_img,
      //保存成功失败之后，都要隐藏画板，否则影响界面显示。
      success: (res) => {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 1000
        })
      },
      fail: (err) => {

      }
    })
  },
  //关闭二维码
  closeCode() {
    let slet = this;
    slet.setData({
      isShow: false
    })
  },

  //关闭头像弹框
  colseMask() {
    this.setData({
      show: false
    })
  },
  openCode() {
    return
  },

  //更新头像
  updateUser(e) {
    this.setData({
      avatar: e.detail.avatar,
      nickname: e.detail.nickname
    })
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


  //跳转到会员页面
  goToMember() {
    wx.navigateTo({
      url: './member/member'
    })
  },

  submit() {},

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
        wx.request({
          url: 'http://192.168.2.102:3000/wxMsg/getOpenId',
          method: 'POST',
          data: {
            code: res.code
          },
          success: res => {
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
      success(res) {}
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

  //去我的二维码页面
  wxCode() {
    // wx.navigateTo({
    //   url: "./wxCode/wxCode",
    // })
    let slet = this;

    slet.setData({
      isQRCode: true
    })
  }
})