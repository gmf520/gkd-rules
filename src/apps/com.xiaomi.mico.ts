import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.mico',
  name: '小米音箱',
  groups: [
    {
      key: 1,
      name: '有声会员开学季特惠',
      enable: false,
      rules: [
        {
          matches: [
            '@ImageView < View < View <2 View < View < View < View < View < FrameLayout < FrameLayout < [vid="dialog_fragment_container"]',
          ],
        },
      ],
    },
  ],
});
