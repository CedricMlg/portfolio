import { useState } from "react";

export default function Input(props) {
  const [focused, setFocused] = useState(false);
  const { errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <input
        {...inputProps}
        // onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
