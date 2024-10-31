import { PropsWithChildren } from "react";
import "./ActionButton.css";

type PropsType = {
  onClick(): void;
};

const ActionButton = ({
  onClick,
  children,
}: PropsWithChildren<PropsType>): JSX.Element => {
  return (
    <button className="action-button" onClick={onClick}>
      {children}
    </button>
  );
};

export { ActionButton };
