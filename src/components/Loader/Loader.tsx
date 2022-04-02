import React from 'react'

import styles from './Loader.module.css'

export const Loader: React.FC<{}> = props => {
    return (
        <div className={styles.loader}/>
    );
};