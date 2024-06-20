var coors;
Page({
  data: {
    polyline: [], //路线
    markers: [
      //起点
      {
        id: 1,
        latitude: 30.742813,
        longitude: 114.884986,
        iconPath: '/static/img/icon/startingPoint.png',
        width: 40,
        height: 40,
        anchor: {
          x: 0.4,
          y: 0.5
        },
        callout: {
          content: '小舒',
          color: '#000',
          fontSize: 12,
          borderWidth: 2,
          borderRadius: 4,
          bgColor: '#fff',
          padding: 5,
          display: 'ALWAYS',
          textAlign: 'center'
        }
      },
      //终点
      {
        id: 2,
        latitude: 30.700608,
        longitude: 115.065863,
        iconPath: '/static/img/icon/endPoint.png',
        width: 40,
        height: 40,
        anchor: {
          x: 0.45,
          y: 0.5
        },
        callout: {
          content: '小鱼',
          color: '#000',
          fontSize: 12,
          borderWidth: 2,
          borderRadius: 4,
          bgColor: '#fff',
          padding: 5,
          display: 'ALWAYS',
          textAlign: 'center'
        }
      }
    ],
    //现在所在的位置
    // longitude: '114.884986',
    // latitude: '30.742813',
    longitude: '',
    latitude: '',
    routeData: [],
    scale: 16

  },
  onLoad: function (options) {
    let slet = this;
    let markers = slet.data.markers;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        for (let i = 0; i < markers.length; i++) {
          if (i == 0) {
            markers[0].latitude = res.latitude;
            markers[0].longitude = res.longitude;
          }
        }
        slet.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers
        })
        wx.request({
          // url: 'https://apis.map.qq.com/ws/direction/v1/bicycling/?from=30.742813,114.884986&to=30.700608,115.065863&output=json&callback=cb&key=' + 'XYBBZ-HC4CX-KBC4J-TMCM3-OZLX2-SVFGX',
          url: `https://apis.map.qq.com/ws/direction/v1/bicycling/?from=${res.latitude + ',' + res.longitude}&to=30.700608,115.065863&output=json&callback=cb&key=XYBBZ-HC4CX-KBC4J-TMCM3-OZLX2-SVFGX`,

          success: function (res) {
            coors = res.data.result.routes[0].polyline;
            // console.log('coors1--', coors);
            //解压
            for (var i = 2; i < coors.length; i++) {
              coors[i] = coors[i - 2] + coors[i] / 1000000;
            }
            // console.log('coors2--', coors);
            //划线 
            var b = [];
            for (var i = 0; i < coors.length; i = i + 2) {
              b[i / 2] = {
                latitude: coors[i],
                longitude: coors[i + 1]
              };
            }
            slet.setData({
              polyline: [{
                points: b,
                color: "#5996FF", //线的颜色
                width: 4,
                dottedLine: false,
              }],
              routeData: b
            })
          }
        })
      }
    })

  },

  //出发
  goTo() {
    const mapCtx = wx.createMapContext('map', this);
    let routeData = this.data.routeData;
    let markers = this.data.markers;
    let aaa = {
      id: 20,
      latitude: 30.724709,
      longitude: 114.957146,
      rotate: 90,
      iconPath: '/static/img/icon/car.png',
      width: 30,
      height: 30,
      anchor: {
        x: 0.5,
        y: 0.4
      }
    }
    markers.push(aaa)
    this.setData({
      markers
    })
    mapCtx.moveAlong({
      markerId: 20,
      // 属性为啥不生效
      autoRotate: true,
      path: routeData,
      duration: 300000,
    })
  },

  //回到当时位置
  controltap() {
    let mpCtx = wx.createMapContext('map')

    // 将地图中心移置当前定位点，此时需设置地图组件 show-location 为true。'2.8.0' 起支持将地图中心移动到指定位置。
    mpCtx.moveToLocation()

    // 将地图缩放值改为初始值
    this.setData({
      scale: 13
    })
  },
});