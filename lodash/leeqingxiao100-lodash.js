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
    return array
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


  fromPairs: function fromPairs(pairs) { // 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
    let res = {}
    for (var i = 0; i < pairs.length; i++) {
      for (var j = 0; j < pairs[i].length - 1; j++) {
        res[pairs[i][j]] = pairs[i][j + 1]
      }
    }
    return res
  },

  head: function head(array) { //获取数组 array 的第一个元素。
    if (array.length == 0) {
      return undefined
    }
    return array[0]
  },

  indexOf: function indexOf(array, value, fromIndex = 0) { //使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 
    if (fromIndex > array.length || -fromIndex > array.length) {  //如果 fromIndex 为负值，将从数组array尾端索引进行匹配
      return -1
    }
    if (fromIndex >= 0) {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i] == value) {
          return i
        }
      }
    } else {
      for (var i = array.length + fromIndex; i >= 0; i--) {
        if (array[i] == value) {
          return i
        }
      }
    }
    return -1
  },

  heinitialad: function initial(array) { //获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
    if (array.length > 0) {
      array.length = array.length - 1
    }
    return array
  },

  join: function join(array, separator = ',') { //将 array 中的所有元素转换为由 separator 分隔的字符串。
    var str = ""
    for (var i = 0; i < array.length - 1; i++) {
      str = str + array[i] + separator
    }
    str = str + array[array.length - 1]
    return str
  },

  last: function last(array) { //获取array中的最后一个元素。
    if (array.length == 0) {
      return undefined
    }
    return array[array.length - 1]
  },

  lastIndexOf: function lastIndexOf(array, value, fromIndex = array.length - 1) { //  这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。 
    if (fromIndex > array.length) {
      return -1
    }
    var i = array.length - fromIndex
    for (fromIndex == array.length - 1 ? i = array.length : i; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }

    return -1
  },
}
