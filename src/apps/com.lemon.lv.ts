import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      key: 1,
      name: '600万精选模板',
      enable: false,
      rules: [
        {
          matches: ['@UISvg <22 FrameLayout < [vid="lynx_container"]'],
        },
      ],
    },
  ],
});
