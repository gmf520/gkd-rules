import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.reader',
  name: '多看',
  groups: [
    {
      key: 1,
      name: '正文底部广告1',

      rules: [
        {
          matches: ['@ImageView < [vid="reading__app_ad_view__close"]'],
          excludeMatches: [
            '@ImageView < FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < ViewGroup < [vid="dk_decor_view"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '正文全屏广告关闭',

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

      rules: [
        {
          matches: ['[vid="ad__feedback_close_dialog_button"]'],
        },
      ],
    },
    {
      key: 4,
      name: '关闭新版本',

      rules: [
        {
          matches: ['[vid="tv_cancel_update"]'],
        },
      ],
    },
  ],
});
