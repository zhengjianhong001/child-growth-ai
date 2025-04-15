/// <reference types="miniprogram-api-typings" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo;
  };
}

interface IStore {
  userInfo: WechatMiniprogram.UserInfo | null;
  hasUserInfo: boolean;
  isLoggedIn: boolean;
  updateUserInfo: (userInfo: WechatMiniprogram.UserInfo) => void;
} 