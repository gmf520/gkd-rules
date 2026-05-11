import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '开屏广告',

      rules: [
        {
          anyMatches: [
            '@ImageView < ViewGroup < ViewGroup <3 ViewGroup < ViewGroup < FrameLayout < FrameLayout <3 FrameLayout < FrameLayout <2 FrameLayout <2 FrameLayout < [vid="content"]',
            '@ImageView < ViewGroup < ViewGroup <3 ViewGroup < ViewGroup < FrameLayout < FrameLayout <3 FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < [vid="content"]',
            '@TextView <3 FrameLayout < [vid="content"]',
            '@TextView <2 RelativeLayout < [vid="content"]',
            '@TextView <6 RelativeLayout < [vid="content"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '首页悬浮广告',

      rules: [
        {
          matches: ['[vid="iv_close"]'],
        },
      ],
    },
  ],
});
