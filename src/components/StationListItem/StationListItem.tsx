import React, { useState } from "react";
import styles from "./StationListItem.module.css";
import StationListItemDetails from "./StationListItemDetails";
import { RadioStation } from "../../types";
import { useRadioStationContext } from "../../store";
import { setSelectedStation } from "../../store/actions";

const StationListItem: React.FC<{ station: RadioStation }> = ({
  station,
}): JSX.Element => {
  const { state, dispatch } = useRadioStationContext();

  function onStationClick() {
    const isCurrentStationSelected = station.id === state.selectedStation?.id;
    dispatch(setSelectedStation(isCurrentStationSelected ? null : station));
  }

  return (
    <li className={styles.item}>
      <StationListItemDetails
        station={station}
        isOpened={station.id === state.selectedStation?.id}
      />
      <div className={styles["clickable-info"]} onClick={onStationClick}>
        <h3 className={styles.title}>{station.name}</h3>
        <div className={styles.frequency}>{station.frequency}</div>
      </div>
    </li>
  );
};

export default StationListItem;
