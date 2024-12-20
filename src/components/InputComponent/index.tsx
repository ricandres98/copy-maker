import React, { SetStateAction } from "react";
import "./inputComponent.css";

type PropsType = {
  label: string;
  stateValue: string;
  setState: React.Dispatch<SetStateAction<string>>;
  placeholder?: string;
};

const InputComponent = ({label, stateValue, setState, placeholder}: PropsType): JSX.Element => {
  return (
    <div className="input-component">
      <label htmlFor={label}>{label}: </label>
      <input
        type="text"
        id={label}
        value={stateValue}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export { InputComponent };
