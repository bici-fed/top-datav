"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TASK_STATUS = exports.TASK_RUN_RESULT = exports.SENSOR_TYPE = exports.PARENT_TYPE = exports.OPC_TERMINAL = exports.OPC_PROTOCOL = exports.GATEWAY_STATUS = exports.GAETWAY_PROTOCOL = exports.DIGITAL_MOUNT_WAY = exports.DEVICE_STATUS = exports.DATA_TYPE = exports.DATA_SOURCE = exports.DATA_ORIGIN = exports.DATASOURCE_TYPE = exports.DATAPOINT_STATUS = exports.BOARD_VISIBILITY = exports.BOARD_FILTERS = exports.Aggregation_List = exports.ATTENTION_STATUS = exports.ANOMALY_STATISTICS_DIMENSION = exports.ANALOG_MOUNT_WAY = void 0;

/**
 * 用户侧常量
 */
// 网关通信协议
var GAETWAY_PROTOCOL = [{
  id: -1,
  name: '未使用'
}, {
  id: 1,
  name: 'modbus'
}, {
  id: 2,
  name: 'DLT645'
}, {
  id: 3,
  name: 'OPC'
}]; // 网关状态

exports.GAETWAY_PROTOCOL = GAETWAY_PROTOCOL;
var GATEWAY_STATUS = [{
  id: 1,
  name: '在线'
}, {
  id: 3,
  name: '离线'
}]; // 传感器状态

exports.GATEWAY_STATUS = GATEWAY_STATUS;
var DEVICE_STATUS = [{
  value: 1,
  text: '正常'
}, {
  value: 2,
  text: '超过上限'
}, {
  value: 3,
  text: '低于下限'
}, {
  value: -1,
  text: '无数据'
}]; // 挂载类型

exports.DEVICE_STATUS = DEVICE_STATUS;
var PARENT_TYPE = [{
  value: -1,
  text: '未挂载'
}, {
  value: 1,
  text: '网关'
}, {
  value: 2,
  text: 'AD'
}, {
  value: 3,
  text: 'PLC'
}];
exports.PARENT_TYPE = PARENT_TYPE;
var OPC_TERMINAL = [{
  id: 1,
  name: '网关'
}, {
  id: 2,
  name: '客户端'
}, {
  id: 9,
  name: '未连接'
}];
exports.OPC_TERMINAL = OPC_TERMINAL;
var OPC_PROTOCOL = [{
  id: 4,
  name: 'OPC DA2.0'
}, {
  id: 5,
  name: 'OPC UA'
}];
exports.OPC_PROTOCOL = OPC_PROTOCOL;
var SENSOR_TYPE = [{
  value: 1,
  text: '数字传感器'
}, {
  value: 2,
  text: '模拟传感器'
}];
exports.SENSOR_TYPE = SENSOR_TYPE;
var DATA_SOURCE = [{
  value: 1,
  text: '数字传感器'
}, {
  value: 6,
  text: '模拟传感器'
}, {
  value: 2,
  text: 'OPC'
}, {
  value: 3,
  text: '二维码'
}, {
  value: 4,
  text: 'PLC'
}, {
  value: 5,
  text: '数字电表'
}, {
  value: 7,
  text: 'MQTT网关'
}];
exports.DATA_SOURCE = DATA_SOURCE;
var DATASOURCE_TYPE = [{
  id: '',
  name: '全部'
}, {
  id: 1,
  name: '已创建数据点'
}, {
  id: 2,
  name: '未创建数据点'
}];
exports.DATASOURCE_TYPE = DATASOURCE_TYPE;
var ANOMALY_STATISTICS_DIMENSION = [{
  id: 1,
  name: '日统计'
}, {
  id: 2,
  name: '周统计'
}, {
  id: 3,
  name: '月统计'
}, {
  id: 4,
  name: '年统计'
}];
exports.ANOMALY_STATISTICS_DIMENSION = ANOMALY_STATISTICS_DIMENSION;
var BOARD_VISIBILITY = [{
  id: 1,
  name: '公司可见'
}, {
  id: 2,
  name: '仅我可见'
}];
exports.BOARD_VISIBILITY = BOARD_VISIBILITY;
var BOARD_FILTERS = [{
  id: 'IFNULL(FirstPinyin(a.`name`),substring(a.`name`, 1, 1))',
  name: '按看板名称'
}, {
  id: 'a.create_time',
  name: '按创建时间'
}, {
  id: 'a.update_time',
  name: '按更新时间'
}];
exports.BOARD_FILTERS = BOARD_FILTERS;
var DATA_ORIGIN = [{
  value: 1,
  text: '数字传感器'
}, {
  value: 6,
  text: '模拟传感器'
}, {
  value: 2,
  text: 'OPC'
}, {
  value: 3,
  text: '二维码'
}, {
  value: 4,
  text: 'PLC'
}, {
  value: 5,
  text: '数字电表'
}, {
  value: 7,
  text: 'MQTT网关'
}];
exports.DATA_ORIGIN = DATA_ORIGIN;
var DATA_TYPE = [{
  value: 1,
  text: '数值型'
}, {
  value: 2,
  text: '布尔型'
}, {
  value: 3,
  text: '时间点'
}, {
  value: 4,
  text: '字符串'
}];
exports.DATA_TYPE = DATA_TYPE;
var DATAPOINT_STATUS = [{
  value: 1,
  text: '有数据'
}, {
  value: -1,
  text: '无数据'
}];
exports.DATAPOINT_STATUS = DATAPOINT_STATUS;
var ATTENTION_STATUS = [{
  id: 1,
  name: '已关注'
}, {
  id: 2,
  name: '未关注'
}];
exports.ATTENTION_STATUS = ATTENTION_STATUS;
var DIGITAL_MOUNT_WAY = [{
  id: 0,
  name: '未挂载'
}, {
  id: 1,
  name: '网关'
}];
exports.DIGITAL_MOUNT_WAY = DIGITAL_MOUNT_WAY;
var ANALOG_MOUNT_WAY = [{
  id: 0,
  name: '未挂载'
}, {
  id: 3,
  name: 'AD'
}];
exports.ANALOG_MOUNT_WAY = ANALOG_MOUNT_WAY;
var TASK_RUN_RESULT = [{
  id: 1,
  name: '成功'
}, {
  id: 2,
  name: '失败'
}];
exports.TASK_RUN_RESULT = TASK_RUN_RESULT;
var TASK_STATUS = [{
  id: 1,
  name: '启动'
}, {
  id: 2,
  name: '暂停'
}]; // 聚合列表

exports.TASK_STATUS = TASK_STATUS;
var Aggregation_List = [{
  id: 'MEDIAN',
  name: '中位数值'
}, {
  id: 'MAX',
  name: '最大值'
}, {
  id: 'MIN',
  name: '最小值'
}, {
  id: 'MEAN',
  name: '平均值'
}];
exports.Aggregation_List = Aggregation_List;