import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 1,
      name: '开屏广告',

      rules: [
        {
          matches: ['[vid="rl_home_ad"] > [vid="tv_ad_skip"]'],
        },
      ],
    },
    {
      key: 2,
      name: '关闭首页悬浮广告',

      rules: [
        {
          anyMatches: [
            '[vid="iv_dialog_close_one"]',
            '@TextView <2 View < View < View < AlertDialog <2 View < View <4 View < WebView < WebView < [vid="best_h5_container"]',
            '@TextView < View < View <7 View < WebView < WebView < [vid="best_h5_container"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '一单回本',

      rules: [
        {
          anyMatches: ['[vid="iv_market_close"]', '[vid="iv_sign_in_close"]'],
        },
      ],
    },
    {
      key: 4,
      name: '关闭tip',

      rules: [
        {
          anyMatches: [
            '@TextView <3 View <2 View < View <3 View <2 View < View < WebView < WebView < [vid="best_h5_container"]',
            '[vid="iv_tips_close"]',
          ],
        },
      ],
    },
  ],
});
