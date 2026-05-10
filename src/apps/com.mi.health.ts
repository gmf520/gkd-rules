import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mi.health',
  name: '小米运动健康',
  groups: [
    {
      key: 1,
      name: '暂不升级',
      enable: false,
      rules: [
        {
          matches: ['[id="android:id/button2"]'],
        },
      ],
    },
  ],
});
