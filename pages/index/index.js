Page({

  data: {
    activityRecords: [],
    page: 1
  },

  onLoad: function (options) {
    this.refresh();
  },

  onPullDownRefresh: function () {
    this.refresh();
  },

  onReachBottom: function () {
    this.loadMore();
  },

  refresh: function () {
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://www.wetest.com/home/list_record?page=1',
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (response) {
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
  
  loadMore: function () {
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
      success: function (response) {
        const oldData = that.data.activityRecords;
        that.setData({
          activityRecords: oldData.concat(response.data.object),
          page: that.data.page + 1
        })
        console.log(that.data.activityRecords);
        wx.hideLoading();
      }
    });
  }
})