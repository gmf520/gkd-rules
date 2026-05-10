import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duokan.reader',
  name: '多看',
  groups: [
    {
      key: 1,
      name: '正文底部广告',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          matches: ['[id="reading__bottom_ad_view__root"]'],
        },
      ],
    },
  ],
});
