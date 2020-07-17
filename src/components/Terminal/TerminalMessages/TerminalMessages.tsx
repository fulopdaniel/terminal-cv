import React from "react";
import css from "./TerminalMessages.module.scss";

interface TerminalMessagesProps {
  messages: JSX.Element[];
}
const TerminalMessages = ({ messages }: TerminalMessagesProps) => {
  const content = messages.map((message, i) => (
    <div key={i} className={css.message}>
      {message}
    </div>
  ));

  return <div className={css.wrapper}>{content}</div>;
};

export default TerminalMessages;
