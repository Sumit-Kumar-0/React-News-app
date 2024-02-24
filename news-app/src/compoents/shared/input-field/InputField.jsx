import React from "react";
import "./InputField.css";

export default function InputField({
  type,
  id,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) {
  return (
    <div className="input-field">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
