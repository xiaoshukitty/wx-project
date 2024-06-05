/**
 * 扁平化数据转树形数据
 * @param {String} data 
 * @param {Number} rootValue
 * @returns 
 */
module.exports = function flattenTree(data, rootValue) {
    let arr = []
    // data就是要转化的列表数据,rootValue列表数据的第一条，遍历数据就从rootValue开始遍历
    // 遍历原则 =>要有领导，根，就是要知道从哪里开始遍历，
    data.forEach(item => {
        // item就是列表中的每条数据
        if (item.uid === rootValue) {
            //走进这里说明找到了根，开始遍历的数据下标，然后去找根下面的数据
            arr.push(item)
            // 子集的pid应该跟父集的id相同，将子追加到父集之中，所以第二个参数应该是id，而不是rootValue数据下标
            const children = flattenTree(data, item.id)
            children.length && (item.food = children)
        }
    })
    return arr // 这里返回一个新数据，来接收转化之后的树结构数据。
}