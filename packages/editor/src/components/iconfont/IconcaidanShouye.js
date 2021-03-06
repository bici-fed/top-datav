/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconcaidanShouye = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M192 896a42.688 42.688 0 0 1-42.688-42.688v-512h-64L490.048 98.56a42.688 42.688 0 0 1 43.904 0l404.736 242.816h-64v512A42.688 42.688 0 0 1 832 896H192zM512 160L213.312 339.2V832h128V554.624c0-21.44 15.808-39.168 36.352-42.24L384 512h256c23.552 0 42.688 19.072 42.688 42.688v277.248l128 0.064V339.2L512 160zM618.688 576H405.312v256h213.376V576z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconcaidanShouye.defaultProps = {
  size: 18,
};

export default IconcaidanShouye;
