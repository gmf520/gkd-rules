import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video',
  name: '爱奇艺',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      enable: false,
      rules: [
        {
          matches: [
            '@TextView <2 LinearLayout <2 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '列表内广告1',
      enable: false,
      rules: [
        {
          matches: [
            '@ImageView <3 RelativeLayout < FrameLayout <6 [vid="video_area"]',
          ],
        },
      ],
    },
  ],
});
