import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'gmf520-gkd',
  version: 0,
  author: '郭明锋',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/gmf520/gkd-rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
