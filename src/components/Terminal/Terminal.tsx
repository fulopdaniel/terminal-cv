import React, { useState, useRef, useEffect } from "react";
import css from "./Terminal.module.scss";
import TerminalHeader from "./TerminalHeader/TerminalHeader";
import TerminalInput from "./TerminalInput/TerminalInput";
import TerminalMessages from "./TerminalMessages/TerminalMessages";
import { isArray } from "util";
import { HELP_COMMAND } from "../Commands/Commands";
import { TerminalUtil } from "./Terminal.util";
import TerminalMobile from "./TerminalMobile/TerminalMobile";

const WINDOW_HEIGHT = 400;
const WINDOW_WIDTH = 600;

const Terminal = () => {
  const [command, setCommand] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | undefined>(0);
  const [messages, setMessages] = useState<JSX.Element[]>([HELP_COMMAND]);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    focusInput();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    scrollToBottom();
    if (e.key === "Enter") {
      processCommand();
    }
    if (e.key === "ArrowUp") {
      goBackInHistory(e);
    }
    if (e.key === "ArrowDown") {
      goForwardInHistory(e);
    }
  };

  const processCommand = () => {
    const response = TerminalUtil.processCommand(command);
    if (isArray(response)) {
      setMessages([...response]);
    } else {
      setMessages([...messages, response]);
    }
    if (command) {
      setHistory([...history, command]);
      setHistoryIndex(undefined);
    }
    setCommand("");
  };

  const goBackInHistory = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const index = typeof historyIndex === "number" ? historyIndex - 1 : history.length - 1;
    if (index >= 0) {
      setCommand(history[index]);
      setHistoryIndex(Math.max(0, index));
    }
  };

  const goForwardInHistory = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const index = typeof historyIndex === "number" ? historyIndex + 1 : history.length;
    if (index < history.length) {
      setCommand(history[index]);
      setHistoryIndex(Math.min(history.length, index));
    }
  };

  const scrollToBottom = () => {
    if (ref.current) {
      const couldScrollDown = ref.current.scrollHeight - ref.current.scrollTop !== WINDOW_HEIGHT;
      if (couldScrollDown) {
        ref.current.scroll(0, ref.current.scrollHeight);
      }
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div className={css.mobile}>
        <TerminalMobile />
      </div>
      <div
        ref={ref}
        tabIndex={-1}
        onKeyDown={handleKeyPress}
        onClick={focusInput}
        className={css.terminal}
        style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT }}
      >
        <TerminalHeader />
        <div className={css.wrapper}>
          <TerminalMessages messages={messages} />
          <TerminalInput ref={inputRef} command={command} setCommand={setCommand} />
        </div>
      </div>
    </>
  );
};

export default Terminal;
