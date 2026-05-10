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
    {
      key: 2,
      name: '开通会员',
      enable: false,
      rules: [
        {
          matches: [
            '@Button < View <2 View <2 View < WebView < WebView < [vid="a5a"]',
          ],
        },
      ],
    },
  ],
});
