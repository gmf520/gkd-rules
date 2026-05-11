import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bytedance.dreamina',
  name: '即梦AI',
  groups: [
    {
      key: 1,
      name: '免费领取',

      rules: [
        {
          matches: ['[vid="id_credit_opt_btn"]'],
        },
      ],
    },
    {
      key: 2,
      name: '添加到主屏幕',

      rules: [
        {
          matches: ['[vid="popup_bottom_sheet_close"]'],
        },
      ],
    },
  ],
});
