import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      enable: false,
      rules: [
        {
          matches: ['[vid="splash_ad_txt_skip"]'],
        },
      ],
    },
  ],
});
