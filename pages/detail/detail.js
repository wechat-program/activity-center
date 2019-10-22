var util = require('../../utils/util.js');
Page({
  data: {},

  onLoad: function(options) {
    console.log(options)
    // 赋值
    this.setData({
      detail: util.getDetailByUuid(options.uuid)
    })
  }
});