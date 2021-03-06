/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconbaocun = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M772.693333 42.410667h-625.493333c-57.429333 0-104.362667 46.933333-104.362667 104.192v729.770666c0 57.429333 46.933333 104.277333 104.277334 104.277334h729.770666c57.344 0 104.277333-46.848 104.277334-104.277334V250.88L772.693333 42.410667zM512 876.373333a153.514667 153.514667 0 0 1-156.416-156.330666A153.6 153.6 0 0 1 512 563.626667a153.6 153.6 0 0 1 156.416 156.416c0 88.746667-67.754667 156.330667-156.416 156.330666m156.416-521.216h-521.386667V146.602667h521.386667v208.554666z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </svg>
  );
};

Iconbaocun.defaultProps = {
  size: 18,
};

export default Iconbaocun;
