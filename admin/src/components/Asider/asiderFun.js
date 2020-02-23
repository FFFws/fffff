import allList from './rootAllList'

export const getNav = (info) => {
    return new Promise((resolve, eject) => {
        let ids = info.rootIds
        let result = []
        allList.map((item, index) => {
            // 一维存在直接添加
            if (ids.indexOf(item.id) !== -1) {
                result.push(item)
                // 对二维进行判断
            } else if (ids.indexOf(item.id) == -1 && item.children) {
                // 遍历二维
                let child = []
                item.children.map((citem, cindex) => {
                    // 二维存在
                    if (ids.indexOf(citem.id) !== -1) {
                        child = citem
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