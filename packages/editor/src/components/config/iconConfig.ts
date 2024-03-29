import { createFromIconfontCN } from '@ant-design/icons';

// @ts-ignore
import * as iconfontUrl from './assets/iconfont/iconfont.js';

const CustomIcon = createFromIconfontCN({
  // scriptUrl: '//at.alicdn.com/t/font_1507378_t04o1mtlc6.js',
  scriptUrl: iconfontUrl,
});

export default CustomIcon;
