import React from 'react';
import { Node } from '@top-datav/core';
import { Emitter } from 'mitt';
import './style.less';
interface WebPageProps {
  iframe: string;
  node: Node;
}
export declare let _emitter: Emitter;
declare const _default: React.ComponentType<WebPageProps>;
export default _default;
