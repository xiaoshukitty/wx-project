const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
Component({

  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },

  data: {
    show: false,
    showCoverAnimation: false, //显示类别选择窗口动画
    showBoxAnimation: false, //显示类别选择窗口动画
    avatarUrl: defaultAvatarUrl,
    nickname: '', //昵称
  },

  methods: {

    //获取个人微信头像昵称，新版本
    onChooseAvatar(e) {
      const {
        avatarUrl
      } = e.detail
      this.setData({
        avatarUrl,
      })
    },

    //关闭弹框
    colseMask() {
      this.triggerEvent('colseMask');
    },

    //保存
    save() {
      if (this.data.nickname == '') {
        return wx.showToast({
          title: '昵称为必选项',
          icon: 'none',
          duration: 1000
        })
      };
      wx.setStorageSync('nickname', this.data.nickname);
      wx.setStorageSync('avatar', this.data.avatarUrl);
      console.log('22');
      this.triggerEvent('updateUser', {
        nickname: this.data.nickname,
        avatar: this.data.avatarUrl
      });
      this.colseMask();
    },
  }
})