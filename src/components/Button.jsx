import React from "react";

const Button = ({ name, style }) => {
  return <div className={`${style} rounded-md p-2 px-4`}>{name}</div>;
};

export default Button;
