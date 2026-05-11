import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
  groups: [
    {
      key: 1,
      name: '开屏广告',

      rules: [
        {
          anyMatches: [
            '[vid="anythink_myoffer_splash_skip"]',
            '[vid="tobid_splash_skip_text"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '首页悬浮广告',

      rules: [
        {
          anyMatches: [
            '@ImageView < [vid="close"]',
            '@ImageButton <7 View < View <2 WebView < WebView < [vid="content_view"]',
          ],
        },
      ],
    },
  ],
});
