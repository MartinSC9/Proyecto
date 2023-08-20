import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css';
import StarFugaz from '../components/StarFugaz/StarFugaz';
import Sun from '../components/Sun/Sun';
import Planet from '../components/Planet/Planet';
import Earth from '../components/Earth/Earth';
import Moon from '../components/Moon/Moon';
import Stars from '../components/Stars/Stars';
import OrbitOne from '../components/Orbit/OrbitOne/OrbitOne';
import OrbitTwo from '../components/Orbit/OrbitTwo/OrbitTwo';
import Asteroids from '../components/Asteroids/Asteroids';

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


    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.documentElement.style.margin = '0';
        document.documentElement.style.padding = '0';

        document.body.style.cursor = 'none';

        return () => {
            // Restaurar el estilo del cursor al desmontar el componente
            document.body.style.cursor = 'auto';
        };
    }, []);

    const randomPosition = () => {
        const maxX = window.innerWidth - 40;
        const maxY = window.innerHeight - 40;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        return { x, y };
    };




    const [trailCursors, setTrailCursors] = useState([]);

    const handleMouseMoveTrail = (event) => {
        const { clientX, clientY } = event;
        const newCursor = {
            x: clientX - 15.5,
            y: clientY - 15.5,
            id: Date.now(),
        };

        setTrailCursors((prevCursors) => [...prevCursors, newCursor]);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMoveTrail);
        return () => {
            document.removeEventListener('mousemove', handleMouseMoveTrail);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrailCursors((prevCursors) => {
                if (prevCursors.length > 0) {
                    return prevCursors.slice(1); // Remove the oldest cursor
                }
                return prevCursors;
            });
        }, 30); // Remove one cursor every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.containerProfile}>
            <Sun />
            <Planet />
            <Earth />
            <Moon />
            <Stars randomPosition={randomPosition} />
            {/* <div className={styles.welcomeText}>
                ¡Welcome!
            </div> */}

            <div className={styles.starFugazesContainer}>
                {additionalStarFugazes.map((star, index) => (
                    <StarFugaz key={index} delay={star.delay} />
                ))}
            </div>
            <OrbitOne />
            <OrbitTwo />
            <Asteroids randomPosition={randomPosition} />
            <div className={styles.cursorFollowerContainer}>
            {trailCursors.map((cursor) => (
                    <div
                        key={cursor.id}
                        className={styles.cursorFollower}
                        style={{
                            left: cursor.x + 'px',
                            top: cursor.y + 'px',
                        }}
                    ></div>
                ))}
            </div>

        </div>
    );
};

export default Profile;
