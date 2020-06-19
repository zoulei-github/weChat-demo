//logs.js
const util = require('../../utils/util.js')

Page({
  // 参与页面渲染的数据
  data: {
    logs: []
  },
  // 页面渲染后 执行
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
