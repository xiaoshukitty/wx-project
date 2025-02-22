Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },


  data: {
    capsuleType: [{
      name: '堂食',
    }, {
      name: '外卖'
    }],
    activeIndex: '0',
  },


  methods: {
    changeCapsule(e) {
      console.log('e', e);
      this.setData({
        activeIndex: e.target.dataset.index
      })
    }
  }
})