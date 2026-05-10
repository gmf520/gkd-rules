import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bilibili.studio',
  name: '必剪',
  groups: [
    {
      key: 1,
      name: '暂不升级',
      enable: false,
      rules: [
        {
          matches: ['[vid="update_btn_cancel"]'],
        },
      ],
    },
  ],
});
