import React from "react";
/*Styles*/
import styles from "./Header.module.css";

/*Icons*/
import backIcon from "../../assets/images/icons/back-arrow.png";
import exitIcon from "../../assets/images/icons/switch.png";

const Header: React.FC<{}> = (props) => {
  return (
    <div className={styles.header}>
      <button title="Back">
        <img src={backIcon} alt="Back" />
      </button>
      <h1 className={styles.title}>Stations</h1>
      <button title="Exit">
        <img src={exitIcon} alt="Exit" />
      </button>
    </div>
  );
};

export default Header;
