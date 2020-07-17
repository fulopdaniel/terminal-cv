import React from "react";
import css from "./TerminalHeader.module.scss";

const TerminalHeader = () => {
  return (
    <div className={css.header}>
      <div className={css.button} style={{ backgroundColor: "rgb(238,108,96)" }}></div>
      <div className={css.button} style={{ backgroundColor: "rgb(247,196,81)" }}></div>
      <div className={css.button} style={{ backgroundColor: "rgb(102,203,87)" }}></div>
    </div>
  );
};

export default TerminalHeader;
