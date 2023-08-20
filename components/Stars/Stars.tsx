import React, { useEffect } from 'react'
import styles from './Stars.module.css'

const Stars = ({randomPosition}) => {
    
    const [stars, setStars] = React.useState([]);

    useEffect(() => {
        const starsData = [...Array(800)].map((_, index) => {
            const position = randomPosition();
            const delay = Math.random() * 5; // Delay between 0 and 5 seconds
            return { position, delay };
        });

        setStars(starsData);
    }, []);

    return (
        <div className={styles.starsContainer}>
            {stars.map((star, index) => (
                <div
                    key={index}
                    className={styles.star}
                    style={{
                        left: `${star.position.x}px`,
                        top: `${star.position.y}px`,
                        animationDelay: `${star.delay}s`
                    }}
                ></div>
            ))}
        </div>
    )
}

export default Stars