import React, {useState} from 'react'
import styles from './StationListItem.module.css'
import StationListItemDetails from "./StationListItemDetails";
import {Station} from "../../types";

const StationListItem: React.FC<{ station: Station }> = ({station}): JSX.Element => {
    const [isExpanded, setExpanded] = useState(false);

    function toggleDetails() {
        setExpanded(!isExpanded);
    }

    return (
        <li className={`${styles.item} ${isExpanded ? styles['expanded'] : ''}`}>
            <StationListItemDetails station={station}/>
            <div className={styles['clickable-info']} onClick={toggleDetails}>
                <h3 className={styles.title}>{station.name}</h3>
                <div className={styles.frequency}>{station.frequency}</div>
            </div>
        </li>
    );
};

export default StationListItem