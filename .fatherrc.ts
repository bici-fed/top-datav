export default {
  esm: 'babel',
  pkgs: [
    'store-utils',
    'core',
    'layout',
    'activity-diagram',
    'bici-diagram',
    'chart-diagram',
    'class-diagram',
    'flow-diagram',
    'sequence-diagram',
    'editor',
  ],
  cssModules: false,
  extractCSS: false,
  injectCSS: true,
  pkgFilter: {
    exclude: ['custom-react-app'],
  },
  lessInBabelMode: {
    modifyVars: {
      '@ant-prefix': 'antdv4',
    },
  },
  extraBabelPlugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
};
