import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '消费券去使用',
      rules: [
        {
          matches: [
            '@TextView < LinearLayout <4 [vid="poplayer_native_state_id"]',
            '@ImageView <2 [vid="poplayer_native_state_center_layout_frame_id"]',
          ],
        },
      ],
    },
  ],
});
