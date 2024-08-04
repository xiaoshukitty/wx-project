import {
  getImages
} from "../../../utils/images.js"

function getnewList() {
  const newList = new Array(20).fill(0)
  const imgUrlList = getImages()
  let count = 0
  for (let i = 0; i < newList.length; i++) {
    newList[i] = {
      idx: i,
      title: `scroll-view`,
      desc: `默认只会渲染在屏节点，会根据直接子节点是否在屏来按需渲染`,
      time: `19:20`,
      like: 88,
      image_url: imgUrlList[(count++) % imgUrlList.length],
    }
  }
  return newList
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: getnewList(),
    crossAxisCount: 2,
    crossAxisGap: 10,
    mainAxisGap: 10,
  },
  onLoad(options) {

  },
  onShow() {
    let that = this;
    if (typeof that.getTabBar === 'function') {
      that.getTabBar().setData({
        tabbarIndex: 1
      })
    }
    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态

  },
  skip(e) {
    const route = e.currentTarget.dataset.skip;
    wx.navigateTo({
      url: route
    })
  },

})