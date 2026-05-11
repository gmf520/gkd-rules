import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 1,
      name: '开屏广告1',
      enable: false,
      rules: [
        {
          matches: [
            '@TextView <2 LinearLayout <2 RelativeLayout < RelativeLayout <3 FrameLayout < [vid="fl_splash_container"]',
          ],
        },
      ],
    },
  ],
});
