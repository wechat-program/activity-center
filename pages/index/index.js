const data = [{
  "title": "Lsp Designer",
  "content": "🎨 A practical component library from Logistics Service Management Product Group feels silky and smooth when used.",
  "thumUpNumber": 3,
  "commentNumber": 1
}, {
  "title": "Biscuits",
  "content": "🍪 Little Spring Rapid Development Framework",
  "thumUpNumber": 1,
  "commentNumber": 1
}, {
  "title": "Pocket",
  "content": "⛱ Pocket's core Object/Relational Mapping functionality",
  "thumUpNumber": 0,
  "commentNumber": 0
}, {
  "title": "Qrcode Scanneraa",
  "content": "🛠 Flutter QR code scanner plugin.",
  "thumUpNumber": 97,
  "commentNumber": 12
}, {
  "title": "Pda Scanner",
  "content": "🚀A Flutter plugin to scanning. Ready for PDA",
  "thumUpNumber": 4,
  "commentNumber": 2
}];

Page({

  data: {
    activityRecords: [],
    page: 1,
    loading: false,
    noMore: false,
    loadingFailed: false
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
    var that = this;
    if (!that.data.loading) {
      wx.showNavigationBarLoading();
      that.setData({
        loading: true
      });
      setTimeout(function() {
        that.setData({
          activityRecords: data,
          page: 1,
          loading: false
        });
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }, 100);
    }

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
    //   }
    // });
  },

  loadMore: function() {
    var that = this;
    if (!that.data.loading) {
      wx.showLoading({
        title: '玩命加载中',
      });
      setTimeout(function() {
        if (data.length === 0) {
          that.setData({
            noMore: true,
            loading: false
          });
        } else {
          that.setData({
            activityRecords: that.data.activityRecords.concat(data),
            page: that.data.page + 1,
            loading: false
          });
        }
        wx.hideLoading();
      }, 300);
    }

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
    //     }
    //   });
  }
})