// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  //单向数据流开始
  /*
  usernameChangeHandle: function (e) {
    this.setData ({
      username: e.detail.value
    })
  },
  
  passwordChangeHandle: function (e) {
    this.setData ({
      password: e.detail.value
    })
  },
  */
  inputChangeHandle: function (e) {
    //var prop = 'username'
    var prop = e.target.dataset.prop
    var changed = {}
    changed[prop] = e.detail.value
    this.setData (changed)
  },
  //单向数据流结束

  //用于处理登录按钮点击事件
  loginHandle: function () {
    console.log ("用户正在登录")
  //  console.log (this.data)
  },

  btnToDo1:function () {
    wx.showModal({
      title: '确认是否登录',
      cancelColor: 'cancelColor',
      success: function (res) {
        if (res.confirm) {
          console.log ("用户点击确认")
          wx.switchTab({
            url: '../first_page/first_page',
          })
        } else {
          wx.showToast({
            title: '退回登录界面',
            icon: 'loading',
            duration: 1500
          })
        }
      } 
    })
  },

  btnToDo2: function () {
 //   console.log (111)
    wx.showModal({
      title: '确认是否注册？',
      cancelColor: 'cancelColor',
      success: function (res) {
        if (res.confirm) {
          console.log ("用户点击确认")
          /*
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000,
          })
          */
          wx.navigateTo({
            url: '../register/register',
          })
          //进行页面跳转
        } else {
          wx.showToast({
            title: '退回到登录页面',
            icon: 'loading',
            duration: 1500
          })
          //退回到原来界面，啥也不干
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