//app.js
App({
  onLaunch: function () {
    console.log ( "app.js初始化" )
    var logs = wx.getStorageSync('logs') || []
    logs.unshift ( Data.now() )
    wx.setStorageSync ( 'logs', logs )
    wx.login({
      success: res => {
        console.log ( 'we.login登录成功' )
      }
    })
    we.wx.getSetting({
      success: res => {
        console.log ( '获取用户的当前设置，返回授权后的信息' )
        console.log(res)
        if ( res.authSetting[ 'scope.userInfo' ] ) {
          console.log ( "用户已经授权" )
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              console.log ( 'app.js获取用户信息成功' )
              console.log ( this.globalData.userInfo )
              if ( this.userInfoReadyCallback ) {
                this.userInfoReadyCallback ( res )
              }
            }
          })
        }
      }
    })
  },
  
})
