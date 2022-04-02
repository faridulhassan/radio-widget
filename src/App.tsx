import React from 'react';
import styles from './App.module.css';
import {WrapperContainer} from "./components/WrapperContainer/WrapperContainer";

function App() {
    return (
        <div className={styles['App']}>
            <WrapperContainer/>
        </div>
    );
}

export default App;
