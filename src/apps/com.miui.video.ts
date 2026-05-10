import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.video',
  name: '小米视频',
  groups: [
    {
      key: 1,
      name: '首页点击观看',
      enable: false,
      rules: [
        {
          matches: ['ViewGroup[vid="v_constraint"] > ImageView[vid="v_icon"]'],
        },
      ],
    },
  ],
});
