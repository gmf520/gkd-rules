import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
    {
      key: 1,
      name: '跳过开屏广告1',
      enable: false,
      rules: [
        {
          matches: ['FrameLayout[vid="ad_container"] > FrameLayout > TextView'],
        },
      ],
    },
    {
      key: 2,
      name: '跳过开屏广告2',
      enable: false,
      rules: [
        {
          matches: ['[vid="start_page_count_down_tv"]'],
        },
      ],
    },
    {
      key: 3,
      name: '跳过开屏广告3',
      enable: false,
      rules: [
        {
          matches: ['FrameLayout[vid="ad_container"] >6 TextView[text="跳过"]'],
        },
      ],
    },
    {
      key: 4,
      name: '给下厨房评分',
      enable: false,
      rules: [
        {
          matches: ['[vid="cancel"]'],
        },
      ],
    },
    {
      key: 5,
      name: '跳过开屏广告4',
      enable: false,
      rules: [
        {
          matches: [
            '@View <3 FrameLayout <2 FrameLayout < [vid="ad_container"]',
          ],
        },
      ],
    },
  ],
});
