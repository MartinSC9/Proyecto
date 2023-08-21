import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Sun from '../../../components/ViewDrawingOne/Sun/Sun';
import Planet from '../../../components/ViewDrawingOne/Planet/Planet';
import Earth from '../../../components/ViewDrawingOne/Earth/Earth';
import Moon from '../../../components/ViewDrawingOne/Moon/Moon';
import Stars from '../../../components/ViewDrawingOne/Stars/Stars';
import StarFugaz from '../../../components/ViewDrawingOne/StarFugaz/StarFugaz';
import OrbitOne from '../../../components/ViewDrawingOne/Orbit/OrbitOne/OrbitOne';
import OrbitTwo from '../../../components/ViewDrawingOne/Orbit/OrbitTwo/OrbitTwo';
import Asteroids from '../../../components/ViewDrawingOne/Asteroids/Asteroids';


const DrawingOne = () => {
    const [additionalStarFugazes, setAdditionalStarFugazes] = useState([]);
    const [trailCursors, setTrailCursors] = useState([]);

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
        const maxX = window.innerWidth - 30;
        const maxY = window.innerHeight - 30;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        return { x, y };
    };

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
        }, 0.3); // Remove one cursor every second
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.containerProfile}>
            <Sun />
            <Planet />
            <Earth />
            <Moon />
            <Stars randomPosition={randomPosition} />
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

export default DrawingOne;
