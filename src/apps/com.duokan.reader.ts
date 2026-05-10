import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.reader',
  name: '多看',
  groups: [
    {
      key: 1,
      name: '正文底部广告',
      enable: false,
      rules: [
        {
          matches: ['[vid="reading__app_ad_view__close"]'],
        },
      ],
    },
    {
      key: 2,
      name: '正文全屏广告关闭',
      enable: false,
      rules: [
        {
          matches: ['[vid="reading__app_ad_view__close"]'],
        },
      ],
    },
    {
      key: 3,
      name: '正文全屏广告反馈',
      enable: false,
      rules: [
        {
          matches: ['[vid="ad__feedback_close_dialog_button"]'],
        },
      ],
    },
  ],
});
