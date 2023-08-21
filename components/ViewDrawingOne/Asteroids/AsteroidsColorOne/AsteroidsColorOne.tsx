import React from 'react'
import styles from './AsteroidsColorOne.module.css'

const AsteroidsColorOne = ({asteroids}) => {
    return (
        <div>
            {asteroids.map((as, index) => (
                <div
                    key={index}
                    className={styles.asteroidColorOne}
                    style={{
                        left: `${as.position.x}px`,
                        top: `${as.position.y}px`,
                        width: `${as.size}px`,
                        height: `${as.size}px`,
                        animationDelay: `${as.delay}s`,
                    }}
                ></div>
            ))}
        </div>
    )
}

export default AsteroidsColorOne