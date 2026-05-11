import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'dji.mimo',
  name: 'DJI Mimo',
  groups: [
    {
      key: 1,
      name: '暂不升级',

      rules: [
        {
          matches: ['[vid="upgrade_cancel_tv"]'],
        },
      ],
    },
  ],
});
