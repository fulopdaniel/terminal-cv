import React from "react";
import css from "./TerminalMobile.module.scss";

const TerminalMobile = () => {
  return (
    <div className={css.wrapper}>
      <h1>Uh oh...</h1>
      <p>It seems like you are viewing this page on a mobile device.</p>
      <p>This site simulates a terminal, which works better on desktops.</p>
      <p>I recommend to take a look at this page on desktop, until that, here is my CV in PDF form:</p>
      <a href="https://drive.google.com/uc?id=151Oj-VCrD0vj5FeBulYxw9CZIoI1DQMf&export=download">Download</a>
    </div>
  );
};

export default TerminalMobile;
