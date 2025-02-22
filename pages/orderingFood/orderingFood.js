const ballFallAnimation = require("../../utils/ballFallAnimation");
const utils = require('../../utils/index.js');

var app = getApp();
Page({
  data: {
    isIphoneX: app.globalData.isIphoneX, //获取机型
    ballAnimationArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], //小球动画
    keyFrames: [], //动画帧
    bus_y: -20, //手指点击的位置
    finishShopCarAnimation: true, //购物车动画是否结束
    foodsList: [],
    nowIndex: 0, //颜色项
    tabIndex: "scroll-0", //右边瞄点项
    cartFoodList: [],
    total: '',
    cartShow: false, //购物车弹窗
    customStyle: '',
    openAnimations: false, //弹出动画
    overlayStyle: '',
    showAttr: false, //是否打开属性面板
    selectFoods: {}, //点击点菜品信息
    round: true, //是否显示圆角
    overlay: true, //是否显示遮罩层
    duration: 300,
    position: 'bottom', //底部弹出
    customStyle: 'max-height: 70%;',
    scrollHeight: '',
  },


  onLoad: function (options) {
    // 设置购物车位置
    this.busPos = {};
    this.busPos["x"] = 58; //购物车的位置
    this.busPos["y"] = wx.getSystemInfoSync().windowHeight - 170;
    if (options.orderFoodList) {
      let aaa = JSON.parse(decodeURIComponent(options.orderFoodList));
      this.setData({
        cartFoodList: aaa
      })
    }

    wx.removeStorageSync('CartFoodS')
    // this.getFoodData();

  },

  onShow: function () {
    this.getFoodData();
    this.getTabBar().setData({
      tabbarIndex: 1
    })
  },

  //打开购物车
  openCartShow() {
    let slet = this;
    let cartShow = slet.data.cartShow;
    let openAnimations = slet.data.openAnimations;

    if (slet.data.cartFoodList.length == 0) {
      return
    }
    if (!cartShow) {
      cartShow = true;
      openAnimations = true;
    } else {
      cartShow = false;
      openAnimations = false;
    }
    slet.getScrollHegiht();
    slet.setData({
      cartShow,
      openAnimations,
    })

  },

  //关闭购物车
  closeCart() {
    let slet = this;
    slet.setData({
      cartShow: false,
    })
  },

  // 添加商品数量
  addFood(e) {

    let slet = this;
    let foodId
    let inventory
    let selectFoods = slet.data.selectFoods;


    if (e.detail.id) {
      foodId = e.detail.id;
      inventory = e.detail.inventory;
    } else {
      foodId = e.target.dataset.item.id;
      inventory = e.currentTarget.dataset.item.inventory;
    }

    let foodsList = slet.data.foodsList;
    let cartFoodList = slet.data.cartFoodList;


    if (inventory == 0) {
      return wx.showToast({
        title: '当前菜品没有材料',
        icon: 'none',
        duration: 1000
      })
    }

    for (let k = 0; k < cartFoodList.length; k++) {
      if (cartFoodList[k].id == foodId && cartFoodList[k].count > 0) {
        return wx.showToast({
          title: '只允许选一个道菜',
          icon: 'none',
          duration: 1000
        })
      }
    }

    for (let i = 0; i < foodsList.length; i++) {
      for (let j = 0; j < foodsList[i].food.length; j++) {
        if (foodsList[i].food[j].id == foodId) {
          foodsList[i].food[j].count = 1;
          selectFoods = foodsList[i].food[j];

          //判断是多规格的数据
          if (e.detail.id) {
            foodsList[i].food[j] = e.detail;
            foodsList[i].food[j].count = 1;
          }
          this.getCartFood('add', foodsList[i].food[j]);

        }
      }
    }

    // 震动
    wx.vibrateShort({});

    slet.setData({
      foodsList,
      selectFoods
    })

    if (!e.detail.id) {
      slet.tapAdd(e);
    }
    slet.observersWatch();

  },

  // 减少商品数量
  subtractionFood(e) {
    let slet = this;
    let selectFoods = slet.data.selectFoods;
    let foodId
    if (e.detail.id) {
      foodId = e.detail.id;
    } else {
      foodId = e.target.dataset.item.id;
    }

    let foodsList = slet.data.foodsList;
    let cartFoodList = slet.data.cartFoodList;

    for (let i = 0; i < foodsList.length; i++) {
      for (let j = 0; j < foodsList[i].food.length; j++) {
        if (foodsList[i].food[j].id == foodId) {
          foodsList[i].food[j].count = 0;
          selectFoods = foodsList[i].food[j]
        }
      }
    }

    //去除购物车中的数据
    for (let k = 0; k < cartFoodList.length; k++) {
      if (cartFoodList[k].id == foodId) {
        cartFoodList.splice(k, 1)
      }
    }
    slet.sumCartMoeny();
    slet.getScrollHegiht();

    wx.setStorageSync('CartFoodS', cartFoodList)
    slet.setData({
      foodsList,
      cartFoodList,
      selectFoods
    })
    if (slet.data.cartFoodList.length == 0) {
      slet.setData({
        cartShow: false,
      })
    }

    slet.observersWatch();
  },

  //计算左侧商品的数量
  observersWatch() {
    let slet = this;
    let cartFoodList = slet.data.cartFoodList;
    let foodsList = slet.data.foodsList;
    if (cartFoodList && cartFoodList.length > 0) {
      for (let i = 0; i < foodsList.length; i++) {
        foodsList[i].cartNum = 0;
        for (let j = 0; j < cartFoodList.length; j++) {
          if (foodsList[i].id == cartFoodList[j].uid) {
            foodsList[i].cartNum++;
          }
        }
      }
    } else {
      for (let i = 0; i < foodsList.length; i++) {
        foodsList[i].cartNum = 0;
      }
    }
    slet.setData({
      foodsList
    })
  },

  //打开菜品规格
  openAttr(e) {
    let slet = this;
    // let selectFoods = e.currentTarget.dataset.item;


    this.busPos["x"] = 80 //购物车的位置
    slet.setData({
      showAttr: true,
      // selectFoods
    })

    //传递数据给 chooseAttr 组件
    // slet.selectComponent("#chooseAttr").specData(selectFoods);
  },

  //关闭菜品规格
  closePopUp() {
    let slet = this;
    this.busPos["x"] = 58; //购物车的位置
    slet.setData({
      showAttr: false,
    })
  },

  //计算底部购物车底部滚动的距离
  getScrollHegiht() {
    let slet = this;
    let cartFoodList = slet.data.cartFoodList;

    if (360 < 63 * cartFoodList.length) {
      slet.setData({
        scrollHeight: 360,
      })
    } else {
      slet.setData({
        scrollHeight: '',
      })
    }
  },


  //获取菜单数据
  getFoodData() {
    let slet = this;
    let foodsList = slet.data.foodsList;
    let cartFoodList = slet.data.cartFoodList;
    let params = {
      name: ''
    }
    app.data.http.post('/dishes/getDishesList', params).then(res => {
      if (res.code == 200) {
        if (cartFoodList.length > 0) {
          for (let i = 0; i < res.data.length; i++) {
            for (let k = 0; k < cartFoodList.length; k++) {
              if (res.data[i].id === cartFoodList[k].id) {
                res.data[i].count = cartFoodList[k].count;
              }
            }
          }
        }


        const result = utils.flattenTree(res.data, 0);
        slet.sumCartMoeny();
        slet.setData({
          foodsList: result
        })
      }
    })
  },

  //清除购物车数据
  clearCart() {
    let slet = this;
    let foodsList = slet.data.foodsList;

    for (let i = 0; i < foodsList.length; i++) {
      for (let j = 0; j < foodsList[i].food.length; j++) {
        foodsList[i].food[j].count = 0
      }
    }
    slet.setData({
      cartFoodList: [],
      foodsList,
      cartShow: false,
    })
    slet.observersWatch();
    slet.sumCartMoeny();
  },

  //添加购物车数据
  getCartFood(val, e) {
    let slet = this;
    let cartFoodList = slet.data.cartFoodList;

    if (val == 'add') {
      if (cartFoodList.length == 0) {
        cartFoodList.push(e)
      } else {
        const res = cartFoodList.findIndex(item => item.id == e.id);
        if (res == '-1') {
          cartFoodList.push(e)
        }
      }
      slet.sumCartMoeny();
    }


    slet.setData({
      cartFoodList,
    })

    wx.setStorageSync('CartFoodS', slet.data.cartFoodList);

  },


  //计算购物车价格
  sumCartMoeny() {
    let slet = this;
    let cartFoodList = slet.data.cartFoodList;
    let s = 0;

    for (var i = 0; i < cartFoodList.length; i++) {
      s += Number(cartFoodList[i].price);
    }

    slet.setData({
      total: s
    })
  },

  // 左侧点击切换
  tabNav(e) {
    let index = e.currentTarget.dataset.index;
    // this.flag = true // 修复点击分类过快时，会因为滚动条的的滑动，调用scroll触发瞄点
    this.setData({
      nowIndex: index,
      tabIndex: `scroll-${index}`
    })
  },

  //右侧滚动左侧切换
  rightScroll(e) {
    // 获取每个goodItem到顶部的距离
    // 减去顶部距离其他东西的距离
    // 如果距离小于或等于0则更新index
    // 设置最后更新index
    var index = this.data.nowIndex
    // scroll-view 距离顶部的高度
    var scrollMenuTop = 0
    let query = wx.createSelectorQuery()
    query.selectAll('#scrollMenu').boundingClientRect()
    query.selectAll('.good_item').boundingClientRect()
    query.exec(res => {
      scrollMenuTop = res[0][0].top
      res[1].forEach((item, index2) => {
        // 每个项目距离顶部的高度-scroll-view 距离顶部的高度=每个项目距离scroll-view顶部的高度
        if (item.top - scrollMenuTop <= 0) {
          index = index2
        }
      });
      // 联动左边项
      this.setData({
        nowIndex: index
      })
    })
  },

  onReady: function () {
    this.ballComponent = [];
    // Do something when page ready.
    // 循环获取所有的小球节点
    for (let i = 0; i < this.data.ballAnimationArray.length; i++) {
      // 获取小球节点信息
      this.ballAnimation = this.selectComponent(`#ball-${i}`);
      // 将小球信息存储
      this.ballComponent.push(this.ballAnimation);
    }
  },

  //去订单页面
  goOrder() {
    let slet = this;
    let cartFoodList = JSON.stringify(slet.data.cartFoodList);

    // return
    let total = slet.data.total;
    if (slet.data.cartFoodList.length == 0) {
      return
    }
    const result = encodeURIComponent(cartFoodList)
    wx.navigateTo({
      url: `/pages/index/order/order?cartFoodList=${result}&total=${total}`,
    })
  },

  tapAdd(e) {
    // 简单判断手指点击位置是否是上次点击的位置，若是，直接是用上一次计算的关键帧数组
    // console.log('输出当前点击为位置', this.data.bus_y, e.touches["0"].clientY)
    if (Math.abs(this.data.bus_y - e.touches["0"].clientY) > 20) {
      this.data.keyFrames = [];
      this.data.bus_y = e.touches["0"].clientY;
      let points = ballFallAnimation.touchOnGoods({
          x: e.touches["0"].clientX - 20,
          y: e.touches["0"].clientY - 50,
        },
        this.busPos,
        80
      );
      var index = 0,
        bezier_points = points["bezier_points"];

      var len = bezier_points.length;
      index = len;

      // 放入关键帧
      for (let i = index - 1; i > -1; i--) {
        this.data.keyFrames.push({
          left: bezier_points[i]["x"] + "px",
          top: bezier_points[i]["y"] + "px",
          opacity: i === 0 ? 0 : 1,
          offset: 0.4,
        });
      }
    }
    this.startAnimation();
  },

  startAnimation: function () {
    // 数组循环，每次开启动画弹出一个数组里面，完成动画之后重新排队
    let id = this.data.ballAnimationArray.pop();

    this.ballComponent[id].startAnimation(this.data.keyFrames);
  },

  // 小球组件动画结束
  endAnimation(e) {
    this.data.ballAnimationArray.unshift(e.detail);
    // 开启购物车动画
    this.startShopCartAnimation();

    // 处理事件逻辑
    // Tip: 后续事件逻辑最好少使用setData,不然在低端机上表现起来会很不流畅
  },

  // 创建购物车动画
  startShopCartAnimation() {
    // 动画没结束，不执行
    if (!this.data.finishShopCarAnimation) {
      return;
    }
    this.data.finishShopCarAnimation = false;
    this.animate(
      "#shopCart",
      [{
          scale: [0.8, 0.8],
        },
        {
          scale: [1.1, 1.1],
        },
        {
          scale: [0.9, 0.9],
        },
        {
          scale: [1, 1],
        },
      ],
      400,
      function () {
        this.data.finishShopCarAnimation = true;
      }.bind(this)
    );
  },

  //跳转详情
  goToProductDetails() {
    wx.navigateTo({
      url: '../productDetails/productDetails',
    })
  },

  //开启分享
  onShareAppMessage: function () {
    return {
      title: '小舒餐厅',
      path: '/pages/index/index'
    }
  },
  // 分享朋友圈
  onShareTimeline: function () {
    return {
      title: '',
      query: {
        key: value
      },
      imageUrl: ''
    }
  },
  //返回上页面
  toBack() {
    wx.navigateBack({
      delta: 1
    })
  }
});