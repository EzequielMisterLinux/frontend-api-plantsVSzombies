import React from 'react';

const PlantCard = ({ plant }) => {

  const displayValue = (key) => plant[key] !== undefined ? plant[key] : 'N/A';

  const plantImage = plant.image ? `/api${plant.image}` : '/api/assets/plants/default.png';

  return (
    <div className="plant-card">
      <h2>{displayValue('name')}</h2>
      <img src={plantImage} alt={plant.name} height="200px" />
      <p>Costo de sol: {displayValue('Sun cost') || displayValue('cost')}</p>
      <p>Recarga: {displayValue('Recharge') || displayValue('recharge')}</p>
      <p>Daño: {displayValue('Damage') || displayValue('damage')}</p>
      <p>Duración: {displayValue('Duration')}</p>
      <p>Rango: {displayValue('range')}</p>
      <p>Familia: {displayValue('Family')}</p>
      <p>Descripción: {displayValue('description')}</p>
    </div>
  );
};

export default PlantCard;
