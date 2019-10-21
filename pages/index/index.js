const data = [{
  "name": "第一条"
}, {
  "name": "第二条"
}, {
  "name": "第三条"
}, {
  "name": "第四条"
}, {
  "name": "第五条"
}, {
  "name": "第六条"
}, {
  "name": "第七条"
}, {
  "name": "第八条"
}, {
  "name": "第九条"
}, {
  "name": "第十条"
}];

Page({

  data: {
    activityRecords: [],
    page: 1
  },

  onLoad: function(options) {
    this.refresh();
  },

  onPullDownRefresh: function() {
    this.refresh();
  },

  onReachBottom: function() {
    this.loadMore();
  },

  refresh: function() {
    this.setData({
      activityRecords: data,
      page: 1
    });

    // wx.showNavigationBarLoading();
    // var that = this;
    // wx.request({
    //   url: 'https://www.wetest.com/home/list_record?page=1',
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (response) {
    //     that.setData({
    //       activityRecords: response.data.object,
    //       page: 1
    //     });
    //     console.log(that.data.activityRecords);
    //     wx.hideNavigationBarLoading();
    //     wx.stopPullDownRefresh();
    //   }
    // });
  },

  loadMore: function() {
    this.setData({
      activityRecords: this.data.activityRecords.concat(data),
      page: this.data.page + 1
    });
    //   var that = this;
    //   wx.showLoading({
    //     title: '玩命加载中',
    //   });
    //   wx.request({
    //     url: 'https://www.wetest.com/home/list_record?page=' + this.data.page + 1,
    //     method: "GET",
    //     header: {
    //       'content-type': 'application/json'
    //     },
    //     success: function(response) {
    //       const oldData = that.data.activityRecords;
    //       that.setData({
    //         activityRecords: oldData.concat(response.data.object),
    //         page: that.data.page + 1
    //       })
    //       console.log(that.data.activityRecords);
    //       wx.hideLoading();
    //     }
    //   });
  }
})