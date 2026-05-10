import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gamestar.pianoperfect',
  name: '随身乐队',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      enable: false,
      rules: [
        {
          matches: [
            '@TextView < FrameLayout <2 FrameLayout <2 FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [vid="splash_container"]',
          ],
        },
      ],
    },
  ],
});
