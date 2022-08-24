// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/brady/work/bici/bicilib/top-datav/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/brady/work/bici/bicilib/top-datav/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/brady/work/bici/bicilib/top-datav/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/store",
        "component": require('/Users/brady/work/bici/bicilib/top-datav/packages/store-utils/src/store/README.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/store-utils/src/store/README.md",
          "updatedTime": 1652922878000,
          "slugs": [
            {
              "depth": 1,
              "value": "Data",
              "heading": "data"
            },
            {
              "depth": 1,
              "value": "Store",
              "heading": "store"
            },
            {
              "depth": 1,
              "value": "Observer",
              "heading": "observer"
            }
          ],
          "title": "Data",
          "nav": {
            "path": "/store",
            "title": "Store"
          }
        },
        "title": "Data - bici-wui(博智云创UI组件库，react版本)"
      },
      {
        "path": "/",
        "component": require('/Users/brady/work/bici/bicilib/top-datav/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1652922878000,
          "hero": {
            "title": "top-datav - 博智云创组件库",
            "desc": "<div class=\"markdown\"><p>top-datav site example</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "基础组件",
              "desc": "<div class=\"markdown\"><p>扩展了antd的组件，更符合业务需要，并封装了许多自定义组件</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "业务组件",
              "desc": "<div class=\"markdown\"><p>提取业务特定场景常用的组件，做成了公共组件，比如数据点选择、人员机构选择等，减少代码copy引起的维护困难问题</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "工具包",
              "desc": "<div class=\"markdown\"><p>将开发中常用的工具函数提取出来，供多个系统使用</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Hello top-datav!",
              "heading": "hello-top-datav"
            }
          ],
          "title": "Hello top-datav!"
        },
        "title": "Hello top-datav! - bici-wui(博智云创UI组件库，react版本)"
      },
      {
        "path": "/docs/intro",
        "component": require('/Users/brady/work/bici/bicilib/top-datav/docs/intro.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/intro.md",
          "updatedTime": 1652922878000,
          "title": "简介",
          "order": 1,
          "group": {
            "path": "/docs/",
            "title": "文档"
          },
          "nav": {
            "title": "文档",
            "order": 1,
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "BiciWui 的理念",
              "heading": "biciwui-的理念"
            },
            {
              "depth": 2,
              "value": "设计思路",
              "heading": "设计思路"
            }
          ]
        },
        "title": "简介 - bici-wui(博智云创UI组件库，react版本)"
      },
      {
        "path": "/resources/resource",
        "component": require('/Users/brady/work/bici/bicilib/top-datav/docs/resource.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/resource.md",
          "updatedTime": 1652922878000,
          "title": "简介",
          "order": 2,
          "group": {
            "path": "/resources/",
            "title": "资源"
          },
          "nav": {
            "title": "资源",
            "order": 5,
            "path": "/resources"
          },
          "slugs": []
        },
        "title": "简介 - bici-wui(博智云创UI组件库，react版本)"
      },
      {
        "path": "/docs/",
        "meta": {},
        "exact": true,
        "redirect": "/docs/intro"
      },
      {
        "path": "/docs",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/docs/intro"
      },
      {
        "path": "/resources/",
        "meta": {},
        "exact": true,
        "redirect": "/resources/resource"
      },
      {
        "path": "/resources",
        "meta": {
          "order": 5
        },
        "exact": true,
        "redirect": "/resources/resource"
      }
    ],
    "title": "bici-wui(博智云创UI组件库，react版本)",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
