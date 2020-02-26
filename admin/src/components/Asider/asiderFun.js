import allList from './rootAllList'

export const getNav = (info) => {
    return new Promise((resolve, eject) => {
        let ids = info.rootList  //['1', '0', '2-0', '2-0', '2-3']
        let result = []
        allList.forEach((item, index) => {
            // 一维存在直接添加
            if (ids.indexOf(item.id) !== -1) {
                result.push(item)
                // 对二维进行判断
            } else if (ids.indexOf(item.id) === -1 && item.children) {
                // 遍历二维
                let child = []
                item.children.forEach((citem, cindex) => {
                    // 二维存在
                    if (ids.indexOf(citem.id) !== -1) {
                        child.push(citem)
                    }
                })
                item.children = child
                result.push(item)
            }
        })
        resolve(result)
    })
}

// 拿到数据
// 拿到鉴权
// 新建数组-处理完返回
// 一维数组 id符合unshift到主数组
// 如果有二维 查看二维id 如果符合，重谢这个二维数组，将这一项添加到主数组
// 递归