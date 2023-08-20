import React, { useEffect } from 'react'
import styles from './Asteroids.module.css'
import AsteroidsColorOne from './AsteroidsColorOne/AsteroidsColorOne';
import AsteroidsColorTwo from './AsteroidsColorTwo/AsteroidsColorTwo';

const Asteroids = ({ randomPosition }) => {
    const [asteroids, setAsteroids] = React.useState([]);
    const [asteroidsTwo, setAsteroidsTwo] = React.useState([]);

    useEffect(() => {
        const asteroidsDataOne = [...Array(15)].map((_, index) => {
            const position = randomPosition();
            const size = Math.random() * 20 + 10; // Tamaño entre 10 y 30
            const delay = Math.random() * 2; // Delay entre 0 y 10 segundos
            return { position, size, delay };
        });

        const asteroidsDataTwo = [...Array(6)].map((_, index) => {
            const position = randomPosition();
            const size = Math.random() * 40 + 20; // Tamaño entre 20 y 60
            const delay = Math.random() * 5; // Delay entre 0 y 5 segundos
            return { position, size, delay };
        });

        setAsteroids(asteroidsDataOne);
        setAsteroidsTwo(asteroidsDataTwo);
    }, []);

    return (
        <div className={styles.asteroidsContainer}>
            <AsteroidsColorOne asteroids={asteroids}/>
            <AsteroidsColorTwo asteroids={asteroidsTwo}/>
        </div>
    )
}

export default Asteroids
