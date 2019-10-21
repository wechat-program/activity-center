// pages/mine/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityRecords: [],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.onPullDownRefresh();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://www.wetest.com/home/list_record?page=1',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function(response) {
        that.setData({
          activityRecords: response.data.object,
          page: 1
        });
        console.log(that.data.activityRecords);
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    wx.showLoading({
      title: '玩命加载中',
    });
    wx.request({
      url: 'https://www.wetest.com/home/list_record?page=' + this.data.page + 1,
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function(response) {
        const oldData = that.data.activityRecords;
        that.setData({
          activityRecords: oldData.concat(response.data.object),
          page: that.data.page + 1
        })
        console.log(that.data.activityRecords);
        wx.hideLoading();
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})