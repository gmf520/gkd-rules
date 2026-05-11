import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '你有1笔补贴奖励待领取',
      enable: false,
      rules: [
        {
          matches: [
            '@ImageView < ViewGroup < ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [parent=null]',
          ],
        },
      ],
    },
  ],
});
