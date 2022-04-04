import React from "react";

/*Styles*/
import styles from "./Header.module.css";

/*Icons*/
import backIcon from "../../assets/images/icons/back-arrow.png";
import stopIcon from "../../assets/images/icons/switch.png";

const Header = (): JSX.Element => {
  return (
    <header role="navigation" className={styles.header}>
      <button title="Back">
        <img src={backIcon} alt="Back" />
      </button>
      <h1 className={styles.title}>Stations</h1>
      <button title="Stop">
        <img src={stopIcon} alt="Stop" />
      </button>
    </header>
  );
};

export default Header;
