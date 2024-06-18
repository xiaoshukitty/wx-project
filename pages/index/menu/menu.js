const ballFallAnimation = require("../../../utils/ballFallAnimation");
const utils = require('../../../utils/index.js')
var app = getApp();
Page({
  data: {
    isIphoneX: app.globalData.isIphoneX, //获取机型
    ballAnimationArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], //小球动画
    keyFrames: [], //动画帧
    bus_y: -20, //手指点击的位置
    finishShopCarAnimation: true, //购物车动画是否结束
    foodsList: [{
      food: [{
          food_img: '',
          name: '小抄黄牛肉1',
          price: 27,
          id: '1'
        },
        {
          food_img: '',
          name: '小抄黄牛肉2',
          price: 27,
          id: '2'
        },
        {
          food_img: '',
          name: '小抄黄牛肉3',
          price: 27,
          id: '3'
        }, {
          food_img: '',
          name: '小抄黄牛肉4',
          price: 27,
          id: '4'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '5'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '6'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '7'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '8'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '9'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '10'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '11'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '12'
        }
      ],
      id: 1,
      sort_name: '炒菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '13'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '14'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '15'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '16'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '17'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '18'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '19'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '20'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '21'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '22'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '23'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '24'
        }
      ],
      id: 2,
      sort_name: '顿菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '25'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '26'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: 27
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '28'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '29'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '30'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '31'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '32'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '33'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '34'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '35'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '36'
        }
      ],
      id: 3,
      sort_name: '顿菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '37'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '38'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '39'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '40'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '41'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '42'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '43'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '44'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '45'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '46'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '47'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '48'
        }
      ],
      id: 4,
      sort_name: '顿菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '49'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '50'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '51'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '52'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '53'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '54'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '55'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '56'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '57'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '58'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '59'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '60'
        }
      ],
      id: 5,
      sort_name: '顿菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '61'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '62'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '63'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '64'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '65'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '66'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '67'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '68'
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '69'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '70'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '71'
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: 27,
          id: '72'
        }
      ],
      id: 6,
      sort_name: '顿菜'
    }],
    nowIndex: 0, //颜色项
    tabIndex: "scroll-0", //右边瞄点项
    cartFoodList: [],
    total: '',
    cartShow: false, //购物车弹窗
    customStyle: '',
    openAnimations: false, //弹出动画
    overlayStyle: '',
  },

  onLoad: function () {
    // 设置购物车位置
    this.busPos = {};
    this.busPos["x"] = 58; //购物车的位置
    this.busPos["y"] = wx.getSystemInfoSync().windowHeight - 90;
    this.getFoodData();
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
    let foodId = e.target.dataset.item.id;
    let foodsList = slet.data.foodsList;
    let cartFoodList = slet.data.cartFoodList;


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
          this.getCartFood('add', foodsList[i].food[j]);
        }
      }
    }


    slet.setData({
      foodsList,
    })
    slet.tapAdd(e);
  },

  // 减少商品数量
  subtractionFood(e) {
    let slet = this;
    let foodId = e.target.dataset.item.id;
    let foodsList = slet.data.foodsList;
    let cartFoodList = slet.data.cartFoodList;

    for (let i = 0; i < foodsList.length; i++) {
      for (let j = 0; j < foodsList[i].food.length; j++) {
        if (foodsList[i].food[j].id == foodId) {
          foodsList[i].food[j].count = 0;
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

    slet.setData({
      foodsList,
      cartFoodList
    })
    if (slet.data.cartFoodList.length == 0) {
      slet.setData({
        cartShow: false,
      })
    }
  },

  //获取菜单数据
  getFoodData() {
    let slet = this;
    let foodsList = slet.data.foodsList;
    app.data.http.post('/dishes/getDishesList').then(res => {
      // flattenTree
      if (res.code == 200) {
        const result = utils.flattenTree(res.data, 0);
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
    console.log(111);
    wx.navigateBack({
      delta: 1
    })
  }
});