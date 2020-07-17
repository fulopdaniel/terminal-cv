import React from "react";
import css from "./Wrapper.module.scss";
import Terminal from "../Terminal/Terminal";

const Wrapper = () => {
  return (
    <main className={css.wrapper}>
      <Terminal />
    </main>
  );
};

export default Wrapper;
