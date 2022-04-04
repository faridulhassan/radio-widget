import React from "react";

/*Styles*/
import styles from "./Loader.module.css";

const Loader = (): JSX.Element => {
  return <div data-testid="loader" className={styles.loader} />;
};

export default Loader;
