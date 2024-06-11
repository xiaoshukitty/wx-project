/*自定义网络请求*/
const http = ({
    url = '',
    params = {},
    ...other
} = {}) => {
    console.log('url---', url);
    const baseUrl = 'http://localhost:3000'
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
                if (res.statusCode >= 200 && res.statusCode < 300) {
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