import styles from '../styles/Home.module.css';
import React from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [animateBackground, setAnimateBackground] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
  }, []);

  const [bubbles, setBubbles] = React.useState([]);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const newBubbles = [...bubbles];
      newBubbles.push({ x: e.clientX, y: e.clientY });
      setBubbles(newBubbles);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [bubbles]);

  const handleButtonClick = () => {
    if (animateBackground) {
      return;
    } else {
      setAnimateBackground(true); // Activar la animación al hacer clic en el botón
      
      // Esperar 2 segundos antes de cambiar de ruta
      setTimeout(() => {
        router.push('/Profile'); // Cambiar la ruta después de 2 segundos
      }, 2500);
    }
  };

  return (
    <div className={`${styles.container} ${animateBackground ? styles.animateBackground : ''}`}>
      {/* <div className={styles.darkBorder}></div> */}

      {bubbles.map((bubble, index) => {
        const adjustedTop = Math.max(0, Math.min(window.innerHeight - 30, bubble.y));
        const adjustedLeft = Math.max(0, Math.min(window.innerWidth - 30, bubble.x));

        return (
          <div
            key={index}
            className={styles.bubble}
            style={{ top: adjustedTop, left: adjustedLeft }}
          ></div>
        );
      })}


      <main>
        <div className={styles.content}>
          <h1 className={styles.title}>¡Bienvenido a mi sitio!</h1>
          <p className={styles.description}>Explora y disfruta.</p>
        </div>
      </main>

      <div className={styles.next}>
        <button onClick={handleButtonClick}>¡Comencemos!</button>
      </div>

      <footer>
        <p className={styles.footerText}>© 2023 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}