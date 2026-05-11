import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kk.xx.newplayer',
  name: '完美视频播放器',
  groups: [
    {
      key: 1,
      name: '关闭底部广告条1',
      enable: false,
      rules: [
        {
          key: 0,
          anyMatches: [
            '@Image < View <4 View < View <2 WebView < WebView < FrameLayout <3 FrameLayout < FrameLayout < [vid="laout_ad"]',
            '@Image < View <2 View < View <2 WebView < WebView < FrameLayout <3 FrameLayout < FrameLayout < [vid="laout_ad"]',
            '@Image < View <4 View < View <2 View < WebView < WebView < FrameLayout <3 FrameLayout < FrameLayout < [vid="laout_ad"]',
            '@View < FrameLayout <2 FrameLayout <2 FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < [vid="laout_ad"]',
            '@View < FrameLayout <4 FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < [vid="laout_ad"]',
          ],
          fastQuery: true,
        },
        {
          key: 1,
          preKeys: [0],
          anyMatches: [
            '@TextView < LinearLayout <2 ListView < LinearLayout < ScrollView < [id="android:id/content"]',
          ],
          fastQuery: true,
        },
      ],
    },
  ],
});
