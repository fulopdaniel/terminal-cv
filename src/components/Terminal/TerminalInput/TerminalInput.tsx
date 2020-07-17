import React from "react";
import css from "./TerminalInput.module.scss";
import Prefix from "./Prefix/Prefix";

interface TerminalInputProps {
  command: string;
  setCommand: (x: string) => void;
}

const TerminalInput = React.forwardRef(({ command, setCommand }: TerminalInputProps, ref) => {
  return (
    <div className={css.wrapper}>
      <Prefix />
      <input
        ref={ref as React.RefObject<HTMLInputElement>}
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className={css.input}
        type="text"
      />
    </div>
  );
});

export default TerminalInput;
