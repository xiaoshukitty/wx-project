Page({

  /**
   * 页面的初始数据
   */
  data: {
    onRotation: false,
    reward: 0,
    result: '', //结果
    // 中奖率 winning 一共加起来为1
    prize: [],
    chance: 1,
    isType: null, // addFood 是点击添加，editFood 是点击修改

    // 弹框
    isShow: false
  },
  onLoad(options) {},
  onShow() {

  },
  onReady() {

  },
  onShareAppMessage() {

  },
  //添加食物
  addFood() {
    const that = this;
    that.setData({
      isShow: true,
      isType: 'addFood'
    })
  },
  //修改食物
  editFood() {
    const that = this;
    that.setData({
      isShow: true,
      isType: 'editFood'
    })
  },
  //通知页面更新
  delFood() {
    const that = this;
    that.close();
  },
  // 关闭弹框
  close() {
    const that = this;
    that.setData({
      isShow: false
    })
  },
  //添加食物
  addFoodData(e) {
    const that = this;
    const result = e.detail;
    let prize = that.data.prize;
    let chanceNum = Number(result.chance) / 100; //添加的概率，转盘中其他的概率将会变化
    prize.forEach(item => {
      item.winnning = (1 - chanceNum) / prize.length;
    })
    prize.push({
      'name': result.addFood,
      'winnning': chanceNum
    });

    console.log('prize', this.data.prize);
    that.close();
    that.setData({
      prize: prize
    })
  },



  getRange(winning) {
    let temp = []
    winning.forEach((item, index) => {
      if (index === 0) {
        temp.push(item['winnning'] * 360)
      } else {
        // 以此在原先的一项加上 item['winnning'] * 360 的值
        temp.push(parseInt(temp.slice(-1)) + item['winnning'] * 360)
      }
    })
    return temp
  },

  getReward() {
    // 求出中奖范围
    let winningRange = this.getRange(this.data.prize)
    // 抽到的随记数
    let random = Math.round(Math.random() * 360)
    // 判断是否中奖
    for (let i in winningRange) {
      let currentwinning = winningRange[i] // 当前取值
      if (random < currentwinning) { //判断抽到的随机数是否小于当前取值
        this.setData({
          reward: i
        })
        break
      } else {
        if (i == 0) {
          continue
        }
        if (random >= winningRange[i - 1] && random <= currentwinning) {
          this.setData({
            reward: i
          })
          break
        }
      }
    }
  },

  onPoint() {
    if (this.data.prize.length == 0) {
      return
    }
    // 平均值
    const averageRotate = 360 / this.data.prize.length
    // 是否有抽奖机会
    if (this.data.chance === 0) {
      console.log('没有抽奖机会');
      return
    }
    // 防止转动时点击开始按钮
    if (!this.data.onRotation) {
      this.setData({
        onRotation: true
      })
      this.getReward()
      let deg = this.data.reward * averageRotate + 3 * 360 // 至少3圈以上

      //启动动画
      this.animate('.wrapper', [{
          rotate: 0,
          ease: 'ease-in-out'
        },
        {
          rotate: deg,
          ease: 'ease-in-out'
        }
      ], 5000, function () {

        let name = this.data.prize[this.data.reward].name;
        this.setData({
          onRotation: false,
          result: name
        })
        // 发送自己的抽奖信息
        this.notification(this.data.prize[this.data.reward]);
      }.bind(this))
    }
  },
  //是否中奖
  notification(e) {
    let that = this;
    let results = that.data.result;
    wx.showModal({
      content: results,
      showCancel: false,
      success(res) {
        if (res.confirm) {
          that.onClear();
        }
      }
    })
  },
  // 让动画重置
  onClear() {
    this.clearAnimation('.wrapper')
  }
})