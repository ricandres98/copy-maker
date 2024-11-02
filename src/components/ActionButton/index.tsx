import { PropsWithChildren } from "react";
import "./ActionButton.css";

type PropsType = {
  onClick(): void,
  negative?: boolean,
};

const ActionButton = ({
  onClick,
  children,
  negative,
}: PropsWithChildren<PropsType>): JSX.Element => {
  const buttonClass = negative 
    ? "action-button action-button--negative" 
    : "action-button";

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export { ActionButton };
