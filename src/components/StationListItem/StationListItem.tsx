import React, { MouseEvent } from "react";

/*Styles*/
import styles from "./StationListItem.module.css";

/*Components*/
import StationListItemDetails from "./StationListItemDetails";

/*Types*/
import { Station } from "../../types";

/*Store/Context/Actions*/
import { useStationContext } from "../../store";
import { setSelectedStation } from "../../store/actions";

const StationListItem: React.FC<{ station: Station }> = ({
  station,
}): JSX.Element => {
  const { state, dispatch } = useStationContext();

  function onStationClick(event: MouseEvent) {
    event.preventDefault();
    const isCurrentStationSelected = station.id === state.selectedStation?.id;
    dispatch(setSelectedStation(isCurrentStationSelected ? null : station));
  }

  return (
    <li className={styles.item} data-testid="station-list-item">
      <StationListItemDetails
        station={station}
        isOpened={station.id === state.selectedStation?.id}
      />
      <div
        className={styles["clickable-info"]}
        onClick={onStationClick}
        data-testid="clickable-info"
      >
        <h3 className={styles.title}>{station.name}</h3>
        <div className={styles.frequency}>{station.frequency}</div>
      </div>
    </li>
  );
};

export default StationListItem;
