import {
  getImages
} from "../../../utils/images.js"
var app = getApp();
const utils = require('../../../utils/index.js')

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
  data: {
    list: getnewList(),
    crossAxisCount: 2,
    crossAxisGap: 10,
    mainAxisGap: 10,
    fallsList: []
  },

  onLoad(options) {
    let params = {
      name: ""
    }
    app.data.http.post('/dishes/getDishesList', params).then(res => {
      if (res.code == 200) {
        const result = utils.flattenTree(res.data, 0);
        let resArr = [];
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result[i].food.length; j++) {
            resArr.push(result[i].food[j])
          }
        }
        console.log('resArr---', resArr);
        this.setData({
          fallsList: resArr
        })
      }
    })
  },

  onReady() {

  },

  onShow() {

  },
  bindscrolltolower() {
    this.setData({
      list: this.data.list.concat(getnewList())
    })
  },
})