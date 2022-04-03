import React from "react";
import styles from "./WrapperContainer.module.css";
import Header from "../Header/Header";
import StationList from "../StationList/StationList";
import Footer from "../Footer/Footer";

export const WrapperContainer: React.FC<{}> = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <StationList />
      <Footer />
    </div>
  );
};
