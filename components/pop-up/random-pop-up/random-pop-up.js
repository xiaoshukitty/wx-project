Component({

  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    addFood: '', //要添加的食物
    chance: '', //概率
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //添加
    add() {
      let that = this;
      let addFood = that.data.addFood;
      let chance = that.data.chance;
      if (addFood == '' || chance == '') {
        return wx.showToast({
          title: '必须全部填写',
          icon: 'none',
          duration: 500
        })
      };
      if (Number(chance) > 100 || Number(chance) < 0) {
        return wx.showToast({
          title: '概率在0-100之前',
          icon: 'none',
          duration: 500
        })
      }
      let foodObj = {
        addFood,
        chance
      }
      that.triggerEvent('addFoodData', foodObj);
    },
    //修改了输入框的值
    addFoodIpt(e) {
      let that = this;
      that.setData({
        addFood: e.detail.value,
      })
    },
    chanceIpt(e) {
      let that = this;
      that.setData({
        chance: e.detail.value,
      })
    },
    //关闭
    close() {
      const that = this;
      that.triggerEvent('close')
    }
  }
})