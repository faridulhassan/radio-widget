import React, { useEffect } from "react";
import styles from "./StationList.module.css";
import StationListItem from "../StationListItem/StationListItem";

import { Loader } from "../Loader/Loader";
import { useRadioStationContext } from "../../store";
import { getStations } from "../../utils";
import {
  SET_LOADING_STATE,
  SET_STATIONS,
  setLoadingState,
  setStations,
} from "../../store/actions";

const StationList: React.FC<{}> = (props) => {
  const { state, dispatch } = useRadioStationContext();

  useEffect(() => {
    dispatch(setLoadingState(true));

    async function loadStations() {
      const stations = await getStations();
      dispatch(setLoadingState(false));
      dispatch(setStations(stations));
    }

    loadStations();
  }, []);

  return (
    <div className={styles["list-wrapper"]}>
      {state.loading ? (
        <Loader />
      ) : (
        <ul className={styles.list}>
          {Array.isArray(state.stations) &&
            state.stations.map((station) => (
              <StationListItem station={station} key={station.id} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default StationList;
