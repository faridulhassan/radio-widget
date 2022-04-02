import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC<{}> = props => {
    return (
        <div className={styles.footer}>
            <div className={styles['currently-playing-label']}>Currently Playing</div>
            <h2 className={styles['currently-playing-title']}>Putin FM</h2>
        </div>
    );
};

export default Footer