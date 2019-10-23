const app = getApp();
Page({

  data: {
    showDialog: false
  },

  onLoad: function(options) {
    var that = this;
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              console.log(res);

              // 登录
              wx.login({
                success: res => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  wx.reLaunch({
                    url: '/pages/index/index',
                  });
                }
              })

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          that.setData({
            showDialog: true
          });
        }
      }
    })
  },

  onGotUserInfo: function(e) {
    if (e.detail.userInfo) {
      console.log('授权通过')
      app.globalData.userInfo = e.detail.userInfo
      wx.reLaunch({
        url: '/pages/index/index',
      })
    } else {
      console.log('拒绝授权')
      wx.showModal({
        title: '真香警告！'
      })
    }
  }
})