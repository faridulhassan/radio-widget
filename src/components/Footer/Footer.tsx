import React from "react";
import styles from "./Footer.module.css";
import { useRadioStationContext } from "../../store";

const Footer: React.FC<{}> = (props) => {
  const { state } = useRadioStationContext();
  return (
    <div className={styles.footer}>
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
    </div>
  );
};

export default Footer;
