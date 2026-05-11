import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.print',
  name: '小米打印',
  groups: [
    {
      key: 1,
      name: '暂不升级',

      rules: [
        {
          matches: [
            '@TextView < LinearLayout <4 LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
  ],
});
