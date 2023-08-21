import React from 'react';
import styles from './StarFugaz.module.css';

const StarFugaz = ({ delay }) => {
    return (
        <div
            className={styles.starFugaz}
            style={{
                animationDelay: `${delay}s`
            }}
        ></div>
    );
};

export default StarFugaz;
