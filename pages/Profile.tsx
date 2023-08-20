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

        document.body.style.cursor = 'none';

        return () => {
            // Restaurar el estilo del cursor al desmontar el componente
            document.body.style.cursor = 'auto';
        };
    }, []);

    const randomPosition = () => {
        const maxX = window.innerWidth - 20;
        const maxY = window.innerHeight - 20;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        return { x, y };
    };




    const [trailCursors, setTrailCursors] = useState([]);

    const handleMouseMoveTrail = (event) => {
        const { clientX, clientY } = event;
        const newCursor = {
            x: clientX - 7.5, // Adjust for half of the cursor's width
            y: clientY - 7.5, // Adjust for half of the cursor's height
            id: Date.now(),
        };

        setTrailCursors((prevCursors) => {
            const updatedCursors = [...prevCursors, newCursor].slice(-20);
            return updatedCursors;
        });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMoveTrail);
        return () => {
            document.removeEventListener('mousemove', handleMouseMoveTrail);
        };
    }, []);

    return (
        <div className={styles.containerProfile}>
            <Sun />
            <Planet />
            <Earth />
            <Moon />
            <Stars randomPosition={randomPosition}/>
            <div className={styles.welcomeText}>
                ¡Welcome!
            </div>

            <div className={styles.starFugazesContainer}>
                {starFugaz && <StarFugaz delay={starFugaz.delay} />}
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
