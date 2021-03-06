import React, { useEffect } from "react";

/*Styles*/
import styles from "./StationList.module.css";

/*Components*/
import StationListItem from "../StationListItem/StationListItem";
import Loader from "../Loader/Loader";

/*Store/Context/Actions*/
import { useStationContext } from "../../store";
import { setLoadingState, setStations } from "../../store/actions";

/*Utils*/
import { getStations } from "../../utils";

const StationList = (): JSX.Element => {
  const { state, dispatch } = useStationContext();

  useEffect(() => {
    dispatch(setLoadingState(true));

    /*Load stations data with fetch api*/
    async function loadStations() {
      const stations = await getStations();
      dispatch(setLoadingState(false));
      dispatch(setStations(stations));
    }

    loadStations();
  }, []);

  return (
    <div className={styles["list-wrapper"]} data-testid="station-list-wrapper">
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
