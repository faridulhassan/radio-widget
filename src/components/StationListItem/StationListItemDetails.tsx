import React from "react";

/*Styles*/
import styles from "./StationListItem.module.css";

/*Types*/
import { RadioStation } from "../../types";

/*Icons*/
import plusIcon from "../../assets/images/icons/plus.png";
import minusIcon from "../../assets/images/icons/minus.png";

const StationListItemDetails: React.FC<{
  station: RadioStation;
  isOpened: boolean;
}> = ({ station, isOpened }) => {
  return (
    <div
      className={`${styles["details-info"]} ${
        isOpened ? styles["expanded"] : ""
      }`}
    >
      <button>
        <img src={minusIcon} alt="prev" />
      </button>
      <div className={styles["station-img"]}>
        <img src={station.image} alt={station.name} />
      </div>
      <button>
        <img src={plusIcon} alt="next" />
      </button>
    </div>
  );
};
export default StationListItemDetails;
