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
    {
      key: 2,
      name: '关广告不感兴趣',
      enable: false,
      rules: [
        {
          matches: [
            '@TextView < LinearLayout <2 ListView < LinearLayout < ScrollView < [id="android:id/content"]',
          ],
        },
      ],
    },
  ],
});
