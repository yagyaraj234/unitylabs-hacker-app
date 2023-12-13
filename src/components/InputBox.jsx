import React from "react";

const InputBox = ({ type, placeholder, style, setSearchText }) => {
  return (
    <input
      type={type}
      className={`${style} p-2 outline-none rounded-lg m-1`}
      placeholder={placeholder}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default InputBox;
