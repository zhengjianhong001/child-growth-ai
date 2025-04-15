import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/index'

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },

  onLoad() {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['userInfo', 'hasUserInfo'],
      actions: ['updateUserInfo'],
    })

    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.updateUserInfo(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  navigateToAnalysis() {
    wx.navigateTo({
      url: '/pages/analysis/analysis'
    })
  }
}) 