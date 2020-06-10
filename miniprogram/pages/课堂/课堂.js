// miniprogram/page/课堂/课堂.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur_id: app.cur_id,
    basic: "",
    now: "",
    icon: "",
    loc: "",
    lifestyle: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    that.getnow ( function ( d ) {
      wx.hideToast()
      console.info (d)
      var icon1 = "https://cdn.heclass.com/cond_icon/" + d.now.cond_code + ".png";
      console,info ( icon1 )
      that.setData ({
        basic: d.basic,
        now: d.now,
        icon: icon1,
        ioc:d.update.loc
      })
    })
    that.getsuggestion ( function ( d ) {
      console.info ( d )
      that.setData ({
        lifestyle: d.lifestyle
       })  
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})