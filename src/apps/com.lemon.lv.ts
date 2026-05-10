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
    {
      key: 2,
      name: '关闭上传条',
      enable: false,
      rules: [
        {
          matches: ['[vid="cloud_guide_container"] > [vid="close_guide"]'],
        },
      ],
    },
  ],
});
