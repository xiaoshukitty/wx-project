const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    amount: '',
    reduce: 0, //计算满减金额
    KeyboardKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
    total: 0
  },
  //计算总价
  behaviors: [Behavior({
    observers: {
      amount() {
        this.setData({
          total: (this.data.amount - this.data.reduce).toFixed(2)
        })
      },
      reduce() {
        this.setData({
          total: (this.data.amount - this.data.reduce).toFixed(2)
        })
      }
    }
  })],

  onLoad: function (options) {

  },

  // 隐藏键盘
  handleHiddenKey() {
    this.setData({
      keyHidden: true
    })
  },
  // 显示键盘
  handleShowKey() {
    this.setData({
      keyHidden: false
    })
  },
  // 键盘输入
  handleKey(e) {
    const that = this
    const {
      key
    } = e.currentTarget.dataset
    const {
      amount
    } = this.data
    // 删除金额
    if (key === 'X') {
      if (amount !== '') {
        const money = amount.slice(0, amount.length - 1)
        that.setData({
          amount: money
        })
      }
    } else {
      // 添加金额
      let money = amount + key
      if (/^(\d+\.?\d{0,2})$/.test(money)) {
        if (money.length > 5) {
          money = money.slice(0, 5)
        }

        const yuan = money.split('.')[0]
        const num = money.split('.')[1]
        if (money.indexOf('.') == -1) {
          money = Number(yuan).toString()
        } else {
          if (num) {
            money = Number(yuan).toString() + '.' + num
            if (num == '00') {
              money = Number(yuan).toString() + '.' + '01'
            }
          } else {
            money = Number(yuan).toString() + '.'
          }
        }
        that.setData({
          amount: money
        })
      }
    }
  },
  bindAmount(e) {
    this.setData({
      amount: e.detail.value,
    })
  },
})