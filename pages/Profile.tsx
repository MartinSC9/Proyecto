import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css';
import StarFugaz from '../components/StarFugaz/StarFugaz';

const Profile = () => {
    const [additionalStarFugazes, setAdditionalStarFugazes] = useState([]);

    useEffect(() => {
        const additionalStarsData = [...Array(2)].map((_, index) => {
            const position = randomPosition();
            const delay = Math.random() * 2; // Delay between 0 and 4 seconds
            return { position, delay };
        });

        setAdditionalStarFugazes(additionalStarsData);
    }, []);
    const [starFugaz, setStarFugaz] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setStarFugaz({ delay: Math.random() * 4 }); // Delay between 0 and 4 seconds
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';
    }, []);

    const randomPosition = () => {
        const maxX = window.innerWidth - 20;
        const maxY = window.innerHeight - 20;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        return { x, y };
    };

    const [stars, setStars] = useState([]);

    useEffect(() => {
        const starsData = [...Array(800)].map((_, index) => {
            const position = randomPosition();
            const delay = Math.random() * 5; // Delay between 0 and 5 seconds
            return { position, delay };
        });

        setStars(starsData);
    }, []);

    return (
        <div className={styles.containerProfile}>
            <div className={styles.sun}></div>
            <div className={styles.anotherSun}></div> {/* Nuevo sol */}
            <div className={styles.earth}></div> {/* Nuevo planeta Tierra */}
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
            <div className={styles.starFugazesContainer}>
                {starFugaz && <StarFugaz delay={starFugaz.delay} />}
                {additionalStarFugazes.map((star, index) => (
                    <StarFugaz key={index} delay={star.delay} />
                ))}
            </div>
        </div>
    );
};

export default Profile;
