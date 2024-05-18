// components/cartcontrol/cartcontrol.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    food: {
      type: Object
    },
  },
  //监听属性变化
  observers: {
    'food': function (val) {
      let slet = this;
      /** 设置购物车的坐标 */

      slet.setData({
        foodinfo: val
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    foodinfo: {},
    busPos: {},
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 添加商品数量
    addFood(e) {
      let slet = this;
      let foodinfo = slet.data.foodinfo;
      if (!foodinfo.count || foodinfo.count == undefined) { //不存在商品数量时
        foodinfo.count = 1;
        slet.setData({
          foodinfo: foodinfo
        })
      } else {
        if (foodinfo.count != 99) { //最大购买量不能超过99
          foodinfo.count++;
        }
      }
      slet.setData({
        foodinfo: foodinfo
      })
    },
    // 减少商品数量
    subtractionFood(e) {
      let slet = this;
      let foodinfo = slet.data.foodinfo;
      foodinfo.count--; //正常减
      slet.setData({
        foodinfo: foodinfo
      })
    },
  }
})