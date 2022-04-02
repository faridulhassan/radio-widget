import React, {useState} from 'react';
import styles from './StationList.module.css';
import StationListItem from "../StationListItem/StationListItem";

import stations from '../../stations.json';
import {Loader} from "../Loader/Loader";

const StationList: React.FC<{}> = props => {
    const [loading, setLoading] = useState(false);

    function toggleDetails() {

    }

    return (
        <div className={styles['list-wrapper']}>
            {loading ? <Loader/> : (<ul className={styles.list}>
                {
                    stations.map(station => <StationListItem station={station} key={station.id}/>)
                }
            </ul>)}


        </div>
    );
};

export default StationList