import React from 'react';
import { Topology } from '@top-datav/core';
import { DataVEditorProps } from '../data/defines';
export declare let canvas: Topology;
/**
 * 编辑器画布
 * @param history
 * @constructor
 */
export declare const EditorLayout: React.ForwardRefExoticComponent<
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
    | 'websocketConf'
    | 'preInstallBgImages'
    | 'uploadConfig'
    | 'industrialLibrary'
    | 'apiURL'
    | 'selfIndustrialLibrary'
    | 'editorData'
    | 'boardData'
  > &
    React.RefAttributes<unknown>
>;
