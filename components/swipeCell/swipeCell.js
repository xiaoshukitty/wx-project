// packageA/member/coupon_v2/test.js
Component({

  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    rightWidth: {
      type: Number,
      value: 0,
    },
    leftWidth: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    prevBox: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closePrevBox() {
      if (wx.tempCqSwipeCell) {
        if (wx.tempCqSwipeCell != this) {
          wx.tempCqSwipeCell.setData({
            prevBox: 0
          });
        }
      }
      wx.tempCqSwipeCell = this;
    }
  }
});