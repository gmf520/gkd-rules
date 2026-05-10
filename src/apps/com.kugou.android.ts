import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 1,
      name: '有声会员开学季特惠',
      enable: false,
      rules: [
        {
          matches: [
            'FrameLayout[id="android:id/content"] > ViewGroup > ImageView[vid="i4r"]',
          ],
        },
      ],
    },
  ],
});
