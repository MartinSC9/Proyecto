import React, { useEffect } from 'react';

const DrawingTwo = () => {

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    return () => {
        // Restaurar el estilo del cursor al desmontar el componente
        document.body.style.cursor = 'auto';
    };
}, []);
  return (
    <div style={{ background: 'linear-gradient(to bottom, #87CEEB, #FF7F50)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: '400px', height: '300px' }}>
        {/* Montañas */}
        <div style={{ position: 'absolute', bottom: '50px', left: '50px', width: '100px', height: '120px', backgroundColor: '#888' }}></div>
        <div style={{ position: 'absolute', bottom: '70px', left: '150px', width: '120px', height: '150px', backgroundColor: '#888' }}></div>
        <div style={{ position: 'absolute', bottom: '60px', left: '280px', width: '80px', height: '100px', backgroundColor: '#888' }}></div>

        {/* Pinos */}
        <div style={{ position: 'absolute', bottom: '20px', left: '70px', width: '10px', height: '40px', backgroundColor: 'green' }}></div>
        <div style={{ position: 'absolute', bottom: '30px', left: '120px', width: '10px', height: '50px', backgroundColor: 'green' }}></div>
        <div style={{ position: 'absolute', bottom: '25px', left: '260px', width: '10px', height: '45px', backgroundColor: 'green' }}></div>

        {/* Cabaña */}
        <div style={{ position: 'absolute', bottom: '0', left: '180px', width: '80px', height: '80px', backgroundColor: 'saddlebrown' }}>
          <div style={{ position: 'absolute', bottom: '80px', left: '160px', width: '120px', height: '20px', backgroundColor: 'saddlebrown' }}></div>
        </div>

        {/* Sol */}
        <div style={{ position: 'absolute', top: '40px', right: '40px', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'yellow' }}></div>
      </div>
    </div>
  );
}

export default DrawingTwo;
