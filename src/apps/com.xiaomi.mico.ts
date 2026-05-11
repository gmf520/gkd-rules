import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.mico',
  name: '小米音箱',
  groups: [
    {
      key: 1,
      name: '有声会员开学季特惠',

      rules: [
        {
          matches: [
            '@ImageView < View < View <2 View < View < View < View < View < FrameLayout < FrameLayout < [vid="dialog_fragment_container"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '音乐会员条',

      rules: [
        {
          matches: ['[vid="rv_content"] > ViewGroup > [vid="btn_close"]'],
        },
      ],
    },
    {
      key: 3,
      name: '开屏广告1',

      rules: [
        {
          matches: ['[vid="splash_ad_skip"]'],
        },
      ],
    },
  ],
});
