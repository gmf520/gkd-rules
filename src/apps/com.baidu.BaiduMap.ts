import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    {
      key: 1,
      name: '开屏广告',

      rules: [
        {
          matches: [
            '[vid="tv_count_down"]',
            '@TextView <3 FrameLayout < FrameLayout < ViewGroup < FrameLayout <4 [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '取消更新',

      rules: [
        {
          matches: ['[vid="cancel_update"]'],
        },
      ],
    },
  ],
});
