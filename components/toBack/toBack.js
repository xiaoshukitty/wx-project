Component({

  properties: {
    isFlag: {
      type: String,
      observer(e) {
        let rightpx = 0;
        wx.getSystemInfo({
          success: function (res) {
            rightpx = res.windowWidth
          }
        })
        const res = wx.getMenuButtonBoundingClientRect();
        rightpx = rightpx - res.right;
        console.log('rightpx--', rightpx);
        this.setData({
          capsuleWidth: res.width,
          capsuleHeight: res.height,
          capsuleTop: res.top,
          capsuleRight: rightpx
        })
      }
    }
  },

  data: {
    capsuleWidth: 0,
    capsuleHeight: 0,
    capsuleTop: 0,
    capsuleRight: 0,
  },


  methods: {
    onBack() {
      wx.navigateBack({
        delta: 1
      });
    }
  }
})