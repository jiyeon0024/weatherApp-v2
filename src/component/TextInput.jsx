import { Children } from "react";
import "./TextInput.css";

function TextInput({ type, className, placeholder, onChange, value }) {
  return (
    <input
      type={type || ""}
      className={className || ""}
      placeholder={placeholder || ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default TextInput;
