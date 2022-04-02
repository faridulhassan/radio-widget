import React from 'react'
import styles from './StationListItem.module.css'

import {Station} from "../../types";


/*Import icons*/
import plusIcon from '../../assets/images/icons/plus.png'
import minusIcon from '../../assets/images/icons/minus.png'

/*Import station image*/
import station_1 from '../../assets/images/stations/station_1.jpg'

const StationListItemDetails: React.FC<{ station: Station }> = ({station}) => {

    return (
        <div className={styles['details-info']}>
            <button><img src={minusIcon} alt="prev"/></button>
            <div className={styles['station-img']}>
                <img src={station.image} alt={station.name}/>
            </div>
            <button><img src={plusIcon} alt="next"/></button>
        </div>
    )
}
export default StationListItemDetails