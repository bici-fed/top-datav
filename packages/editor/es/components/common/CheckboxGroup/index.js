import React from "react";
import styles from "./style.module.css";
import CustomIcon from "../../config/iconConfig";

var CheckboxGroup = function CheckboxGroup(props) {
  var value = props.value,
      disabled = props.disabled,
      onChange = props.onChange;

  var handleChange = function handleChange(e, item) {
    item.checked = e.currentTarget.checked;
    onChange && onChange(value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles.checkboxGroup
  }, (value || []).map(function (item, index) {
    return /*#__PURE__*/React.createElement("label", {
      key: index,
      style: {
        width: 100 / value.length + "%"
      },
      className: item.checked ? "".concat(styles.buttonWrapper, " ").concat(styles.buttonWrapperChecked) : "".concat(styles.buttonWrapper)
    }, /*#__PURE__*/React.createElement("span", {
      className: styles.checkboxButton
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      className: styles.checkboxButtonInput,
      onClick: function onClick(e) {
        return handleChange(e, item);
      },
      value: item.value
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(CustomIcon, {
      type: item.icon
    })));
  }));
};

export default CheckboxGroup;