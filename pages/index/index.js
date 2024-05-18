const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIphoneX: app.globalData.isIphoneX, //获取机型
    foodsList: [{
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }
      ],
      id: 1,
      sort_name: '炒菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }
      ],
      id: 2,
      sort_name: '顿菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }
      ],
      id: 2,
      sort_name: '顿菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }
      ],
      id: 2,
      sort_name: '顿菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }
      ],
      id: 2,
      sort_name: '顿菜'
    }, {
      food: [{
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        },
        {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }, {
          food_img: '',
          name: '小抄黄牛肉',
          price: '27',
        }
      ],
      id: 2,
      sort_name: '顿菜'
    }],
    nowIndex: 0, //颜色项
    tabIndex: "scroll-0", //右边瞄点项
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },


  subscribe() {
    wx.requestSubscribeMessage({
      tmplIds: ['Pbur9QdHiyABD54MGFrDUGmi1AXqAreYSuOGmqn4aII'],
      success(res) {
        console.log('res---', res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
    this.getTabBar().setData({
      tabbarIndex: 0
    })
  },

  // 左侧点击切换
  tabNav(e) {
    let index = e.currentTarget.dataset.index;
    console.log('index---', index);
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


  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})