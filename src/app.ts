/// <reference path="../node_modules/miniprogram-api-typings/index.d.ts" />

// app.ts
interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo
  }
}

App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs: number[] = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: (res: WechatMiniprogram.LoginSuccessCallbackResult) => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  }
}) 