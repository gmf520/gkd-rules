import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.banjixiaoguanjia.app',
  name: '班级小管家',
  groups: [
    {
      key: 1,
      name: '开屏广告',

      rules: [
        {
          matches: [
            '@TextView <2 FrameLayout < FrameLayout < [vid="splash_ad_container"]',
          ],
        },
      ],
    },
  ],
});
