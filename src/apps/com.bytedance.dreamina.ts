import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bytedance.dreamina',
  name: '即梦AI',
  groups: [
    {
      key: 1,
      name: '免费领取',
      enable: false,
      rules: [
        {
          matches: ['[vid="id_credit_opt_btn"]'],
        },
      ],
    },
  ],
});
