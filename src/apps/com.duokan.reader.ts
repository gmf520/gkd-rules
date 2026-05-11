import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.reader',
  name: '多看',
  groups: [
    {
      key: 1,
      name: '正文底部广告1',
      enable: false,
      rules: [
        {
          matches: ['@ImageView < [vid="reading__app_ad_view__close"]'],
        },
      ],
    },
    {
      key: 2,
      name: '正文全屏广告关闭',
      enable: false,
      rules: [
        {
          matches: [
            '@TextView[vid="reading__app_ad_view__close"][text="广告"]',
          ],
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
    {
      key: 4,
      name: '关闭新版本',
      enable: false,
      rules: [
        {
          matches: ['[vid="tv_cancel_update"]'],
        },
      ],
    },
  ],
});
