import React from 'react'
import styles from './AsteroidsColorTwo.module.css'

const AsteroidsColorTwo = ({asteroids}) => {
  return (
    <div>
      {asteroids.map((as, index) => (
        <div
          key={index}
          className={styles.asteroidColorTwo}
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

export default AsteroidsColorTwo