import React from "react";

/*Styles*/
import styles from "./Footer.module.css";

/*Store/Context/Actions*/
import { useStationContext } from "../../store";

const Footer = (): JSX.Element => {
  const { state } = useStationContext();
  return (
    <footer role="contentinfo" className={styles.footer}>
      {state.selectedStation && (
        <>
          <div className={styles["currently-playing-label"]}>
            Currently Playing
          </div>
          <h2 className={styles["currently-playing-title"]}>
            {state.selectedStation.name}
          </h2>
        </>
      )}
    </footer>
  );
};

export default Footer;
