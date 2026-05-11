import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '开屏广告',

      rules: [
        {
          matches: ['[vid="logo_layout"] > [vid="count_down"]'],
        },
      ],
    },
  ],
});
