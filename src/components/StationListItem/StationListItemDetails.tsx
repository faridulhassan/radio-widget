import React from "react";

/*Styles*/
import styles from "./StationListItem.module.css";

/*Types*/
import { StationListItemDetailsProps } from "../../types";

/*Icons*/
import plusIcon from "../../assets/images/icons/plus.png";
import minusIcon from "../../assets/images/icons/minus.png";

const StationListItemDetails: React.FC<StationListItemDetailsProps> = ({
  station,
  isOpened,
}): JSX.Element => {
  return (
    <div
      className={`${styles["details-info"]} ${
        isOpened ? styles["expanded"] : ""
      }`}
      data-testid="station-list-item-details"
    >
      <button title="previous">
        <img src={minusIcon} alt="prev" />
      </button>
      <div className={styles["station-img"]}>
        <img src={station.image} alt={station.name} />
      </div>
      <button title="next">
        <img src={plusIcon} alt="next" />
      </button>
    </div>
  );
};
export default StationListItemDetails;
