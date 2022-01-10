var leeqingxiao100 = {
  chunk: function (array, size) {
    let res = []
    for (var i = 0; i < array.length; i++) {
      var num = []
      for (var j = 0; j < size; j++) {
        num[j] = array[i]
        if (i == array.length - 1) {
          break
        }
      }
      res.push(num)
    }
    return res
  }



}
