import { observable, action } from 'mobx-miniprogram'

export const store = observable({
  // 数据字段
  userInfo: null,
  hasUserInfo: false,

  // 计算属性
  get isLoggedIn() {
    return this.hasUserInfo
  },

  // actions
  updateUserInfo: action(function(userInfo: WechatMiniprogram.UserInfo) {
    this.userInfo = userInfo
    this.hasUserInfo = true
  })
}) 