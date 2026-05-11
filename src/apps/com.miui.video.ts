import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.video',
  name: '小米视频',
  groups: [
    {
      key: 1,
      name: '首页点击观看',
      rules: [
        {
          matches: ['ViewGroup[vid="v_constraint"] > ImageView[vid="v_icon"]'],
        },
      ],
    },
    {
      key: 2,
      name: '未成年模式',
      rules: [
        {
          matches: ['[vid="close_btn"]'],
        },
      ],
    },
  ],
});
