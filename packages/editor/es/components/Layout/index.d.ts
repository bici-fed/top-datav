import React from 'react';
import { Topology } from '@top-datav/core';
import 'antd/dist/antd.less';
import { DataVEditorProps } from '../data/defines';
export declare let canvas: Topology;
/**
 * 编辑器画布
 * @param history
 * @constructor
 */
declare const EditorLayout: React.ForwardRefExoticComponent<
  Pick<
    DataVEditorProps,
    | 'history'
    | 'onExtraSetting'
    | 'onEditorSaveCb'
    | 'onPoweroff'
    | 'autoSaveInterval'
    | 'onPreview'
    | 'key'
    | 'token'
    | 'onAddDataPoint'
    | 'onAddVedioSource'
    | 'dataPointPropsMap'
    | 'industrialLibrary'
    | 'websocketConf'
    | 'apiURL'
    | 'selfIndustrialLibrary'
    | 'preInstallBgImages'
    | 'editorData'
    | 'boardData'
    | 'uploadConfig'
  > &
    React.RefAttributes<unknown>
>;
export default EditorLayout;
