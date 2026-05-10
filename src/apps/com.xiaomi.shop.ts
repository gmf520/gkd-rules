import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 1,
      name: '跳过开屏广告',
      enable: false,
      rules: [
        {
          matches: ['[id="com.xiaomi.shop:id/skip"]'],
        },
      ],
    },
  ],
});
