import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gamestar.pianoperfect',
  name: '随身乐队',
  groups: [
    {
      key: 1,
      name: '开屏广告1',
      enable: false,
      rules: [
        {
          matches: [
            '@TextView < FrameLayout <2 FrameLayout <2 FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [vid="splash_container"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告2',
      enable: false,
      rules: [
        {
          matches: [
            '@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid="splash_container"]',
          ],
        },
      ],
    },
  ],
});
