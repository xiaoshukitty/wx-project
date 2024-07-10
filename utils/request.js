/*自定义网络请求*/
const http = ({
    url = '',
    params = {},
    ...other
} = {}) => {
    // const baseUrl = 'http://localhost:3000'
    const baseUrl = 'http://192.168.1.6:3000' //本地原因：手机的wifi和电脑的wifi必须同一局域网下，ip地址为电脑wifi的ip地址
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + url,
            data: params,
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            //header: getHeader(),
            ...other,
            complete: (res) => {
                if (res.data.code >= 200 && res.data.code < 300) {
                    resolve(res.data)
                } else {
                    wx.hideLoading();
                    reject(res);
                }
            }
        })
    })
}
module.exports = {
    get(url, params = {}) {
        return http({
            url,
            params
        })
    },
    post(url, params = {}) {
        return http({
            url,
            params,
            method: 'post'
        })
    },
    put(url, params = {}) {
        return http({
            url,
            params,
            method: 'put'
        })
    },
    // 这里不能使用 delete, delete为关键字段
    myDelete(url, params = {}) {
        return http({
            url,
            params,
            method: 'delete'
        })
    }
}