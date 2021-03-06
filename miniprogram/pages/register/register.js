// pages/register/register.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    double_password: ''
  },
/*曾经自己写的SB返回函数
  backTologin: function () {
    wx.navigateBack()
  },
*/
  //单向数据流
  inputChangeHandle: function (e) {
    //var prop = 'username'
    var prop = e.target.dataset.prop
    var changed = {}
    changed[prop] = e.detail.value
    this.setData (changed)
  },
  //button确认注册的事件
  btnf: function () {
    wx.showModal ({
      title: '是否确认注册',
      success: function (res) {
        if (res.confirm) {
          wx.switchTab({
            url: '../first_page/first_page',
          })
        } else {
          wx.showToast({
            title: '返回注册界面',
            icon: 'loading',
            duration: 1500
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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