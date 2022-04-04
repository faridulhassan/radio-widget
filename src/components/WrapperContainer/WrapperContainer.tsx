import React from "react";

/*Styles*/
import styles from "./WrapperContainer.module.css";

/*Components*/
import Header from "../Header/Header";
import StationList from "../StationList/StationList";
import Footer from "../Footer/Footer";

export const WrapperContainer = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />
      <StationList />
      <Footer />
    </div>
  );
};
