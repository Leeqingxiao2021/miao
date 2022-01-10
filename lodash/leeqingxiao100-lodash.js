var leeqingxiao100 = {
  chunk: function chunk(array, size) {
    let res = []
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


}
