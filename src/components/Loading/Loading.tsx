import React from 'react';
import styles from "./loading.module.css";

function Loading(): React.ReactElement {
    return (
        <div className={styles.loader}>
            <div className={styles.box1}></div>
            <div className={styles.box2}></div>
            <div className={styles.box3}></div>
        </div>
    );
}

export default Loading;
