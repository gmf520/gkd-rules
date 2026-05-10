import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: '智能服务广告',
  groups: [
    {
      key: 1,
      name: '为什么不希望看到此条内容',
      enable: false,
      rules: [
        {
          matches: ['[vid="no_interest"]'],
        },
      ],
    },
    {
      key: 2,
      name: '不感兴趣',
      enable: false,
      rules: [
        {
          matches: ['[vid="item_feedback"][text="广告密集"]'],
        },
      ],
    },
    {
      key: 3,
      name: '开屏广告1',
      enable: false,
      rules: [
        {
          matches: ['[vid="view_skip_button"]'],
        },
      ],
    },
  ],
});
