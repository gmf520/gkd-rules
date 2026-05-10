import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 1,
      name: '关闭内测版本',
      enable: false,
      rules: [
        {
          matches: [
            'FrameLayout[id="android:id/content"] > ViewGroup > ImageView[vid="i4r"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '开通会员1',
      enable: false,
      rules: [
        {
          matches: [
            '@Button < View <2 View <2 View < WebView < WebView < [vid="a5a"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '开通会员2',
      enable: false,
      rules: [
        {
          matches: ['[vid="vh0"]'],
        },
      ],
    },
    {
      key: 4,
      name: '开通会员3',
      enable: false,
      rules: [
        {
          matches: [
            '@ViewGroup < ViewGroup <2 ViewGroup < ViewGroup <2 FrameLayout < [vid="b3j"]',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '开屏广告1',
      enable: false,
      rules: [
        {
          matches: [
            '@View < FrameLayout <3 FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '开屏广告2',
      enable: false,
      rules: [
        {
          matches: [
            '@View < FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '看广告听会员歌曲',
      enable: false,
      rules: [
        {
          matches: [
            '@ViewGroup < ViewGroup <3 ViewGroup < ViewGroup < FrameLayout < [vid="b3j"]',
          ],
        },
      ],
    },
  ],
});
