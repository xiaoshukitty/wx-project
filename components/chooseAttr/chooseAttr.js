Component({

  properties: {
    selectFoods: {
      type: Object,
      observer(e) {
        this.setData({
          specificationFood: e
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    attrIndex: 0,
    specificationFood: {}, //菜品数据
    storageCartFoods: [], //购物车缓存数据
  },

  methods: {

    //选择属性
    selectAttr(e) {
      let slet = this;
      let selectData = e.currentTarget.dataset;
      let specificationFood = slet.data.specificationFood; //购物车数据

      for (let i = 0; i < specificationFood.attribute.length; i++) {
        specificationFood.attribute[i].attrChecked = false;
      }

      specificationFood.attribute[selectData.index].attrChecked = true;

      slet.setData({
        attrIndex: selectData.index,
        specificationFood,
      })

    },

    //属性加入购物车
    addAttrCart(e) {
      let slet = this;
      slet.tapAdd(e);
    },

    //关闭
    closeAttr() {
      let slet = this;
      slet.triggerEvent('closePopUp')
    },

    //获取传递过来的菜品数据
    specData(food) {
      let slet = this;

      //获取购物车缓存数据来对多规格数据回写
      let storageCartFoods = wx.getStorageSync('CartFoodS');


      //购物车有数据
      if (storageCartFoods.length > 0) {
        for (let i = 0; i < storageCartFoods.length; i++) {
          //购物车是否有存多规格的数据
          if (storageCartFoods[i].id == food.id) {
            for (let k = 0; k < storageCartFoods[i].attribute.length; k++) {
              if (storageCartFoods[i].attribute[k].attrChecked == true) {
                food.attribute[k].attrChecked = true;
                slet.setData({
                  attrIndex: k,
                })
              }
            }
            slet.setData({
              specificationFood: storageCartFoods[i]
            })
          }
        }
      } else {
        food.attribute[0].attrChecked = true;
        slet.setData({
          specificationFood: food
        })
      }

      slet.setData({
        storageCartFoods
      })
    },

    //添加菜品
    addFood(e) {
      let slet = this;
      slet.triggerEvent('addFood', slet.data.specificationFood)
    },

    //减少菜品
    subtractionFood(e) {
      let slet = this;
      slet.triggerEvent('subtractionFood', slet.data.specificationFood)
    }
  }
})