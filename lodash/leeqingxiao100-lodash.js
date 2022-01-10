var leeqingxiao100 = {
  chunk: function chunk(array, size = 1) { // 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 
    let res = []                           // 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
    var i = 0
    while (i < array.length) {
      var num = []
      for (var j = 0; j < size; j++) {
        num[j] = array[i]
        i++
        if (i == array.length) {
          break
        }
      }
      res.push(num)
    }
    return res
  },

  compact: function compact(array) { // 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
    let res = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

  drop: function drop(array, n = 1) { // 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
    if (n >= array.length) {
      return []
    }
    let res = []
    for (var i = n; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  },

  dropRight: function dropRight(array, n = 1) { // 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
    if (n >= array.length) {
      return []
    }
    let res = []
    for (var i = 0; i < array.length - n; i++) {
      res.push(array[i])
    }
    return res
  },

  fill: function fill(array, value, start = 0, end = array.length) { // 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束(但不包含end位置)。
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return res
  },

  flatten: function flatten(array) { // 减少一级array嵌套深度。
    let res = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          res.push(array[i][j])
        }
      } else {
        res.push(array[i])
      }
    }
    return res
  },


  flattenDeep: function flattenDeep(array) { // 将array递归为一维数组。
    var i = 0
    var res = []
    while (i < array.length) {
      if (Array.isArray(array[i])) {
        flattenDeep(array[i])
      } else {
        var value = array[i]
      }
      i++
    }

    res.push(value)

    return res

  },
}
