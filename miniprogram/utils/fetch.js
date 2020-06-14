module.exports = ( url , data ) => {
  return new Promise ( ( resolve , reject ) => {
    wx.request({
      url: 'https://www.myagric.com/${url}',
      success: resolve,
      fail: reject
    })
  })
}