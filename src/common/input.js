import React from "react";

const Input = ({ type, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder="Enter email"
      value={value}
      onChange={onChange}
      autoComplete="current-password"
    />
  );
};

export default Input;
