import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 1,
      name: '关闭内测版本',
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
