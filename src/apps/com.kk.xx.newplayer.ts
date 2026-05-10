import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kk.xx.newplayer',
  name: '完美视频播放器',
  groups: [
    {
      key: 1,
      name: '关闭底部广告条',
      enable: false,
      rules: [
        {
          matches: [
            '@WebView < FrameLayout <3 FrameLayout < FrameLayout < [vid="laout_ad"]',
          ],
        },
      ],
    },
  ],
});
