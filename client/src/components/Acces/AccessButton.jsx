import React from 'react';
import './AccessButton.css'

const AccessButton = ({ setAccess, navigate }) => {
  const handleAccess = () => {
    setAccess(true);
    navigate('/home');
  };

  return (
    <div className='container'>
      <h1>¡Bienvenido al PI Countries!</h1>
      
      <p>En esta App podrás ver todos los países del mundo, y también podrás agregarles actividades.</p>
      
      <p>Pulsa el botón para acceder a inicio</p>
     
      <button className='buttonAcces' onClick={handleAccess}>Acceder</button>
    </div>
  );
};

export default AccessButton;