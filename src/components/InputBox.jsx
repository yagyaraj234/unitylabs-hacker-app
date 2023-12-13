import React from "react";

const InputBox = ({ type, placeholder, style }) => {
  return (
    <input
      type={type}
      className={`${style} p-2 outline-none rounded-lg m-1`}
      placeholder={placeholder}
    />
  );
};

export default InputBox;
