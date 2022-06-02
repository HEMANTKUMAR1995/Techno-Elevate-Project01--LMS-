import { Input } from "antd";
import React from "react";
import "antd/dist/antd.css"




function InputComponent({
  className = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  size = "default",
  style = {},
  status = "", //error or warning
  readOnly = false,
  type = "",
}) {
  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
        style={style}
        status={status}
        readOnly={readOnly}
        type={type}
        className={className}
      />
    </div>
  );
}

export default InputComponent;