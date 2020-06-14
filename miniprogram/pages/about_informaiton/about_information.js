// pages/about_informaiton/about_information.js
const fetch = require('../../utils/fetch')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: {},
    shops: []
  },

  /**
   * 生命周期函数--监听页面加载
   */

  links_event: function () {
    wx.navigateTo({
      url: '../outs/outs',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  link2s_event: function () {
    wx.navigateTo({
      url: '../outss/outss',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  link3s_event: function () {
    wx.navigateTo({
      url: '../outsf/outsf',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  
  
  onLoad: function (options) {
    
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