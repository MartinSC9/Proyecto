import React, { useEffect } from 'react'
import styles from './Cursor.module.css'

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const container = document.querySelector(`.${styles.containerProfile}`);
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.right - containerRect.left;
        const maxY = containerRect.bottom - containerRect.top;
        const x = Math.min(Math.max(clientX - 10, 10), maxX);
        const y = Math.min(Math.max(clientY - 10, 10), maxY);
        setCursorPosition({ x, y });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className={styles.cursorFollower}
            style={{
                left: cursorPosition.x + 'px',
                top: cursorPosition.y + 'px',
            }}
        ></div>
    )
}

export default Cursor