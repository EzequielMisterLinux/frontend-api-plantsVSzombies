import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPlantas = async () => {
      try {

        const response = await fetch('/api/api/plants');
        const plantNames = await response.json();

        const plantDetails = await Promise.all(
          plantNames.map(async (plantName) => {
            const plantUrl = `/api/api/plants/${encodeURIComponent(plantName)}`;
            const plantResponse = await fetch(plantUrl);
            return plantResponse.json();
          })
        );

        setPlants(plantDetails);
      } catch (err) {
        setError('Error al obtener las plantas');
        console.error(err);
      }
    };

    obtenerPlantas();
  }, []);

  if (error) return <div>{error}</div>;
  if (plants.length === 0) return <div>Cargando plantas...</div>;

  return (
    <div id="plant-container">
      {plants.map((plant, index) => (
        <PlantCard key={index} plant={plant} />
      ))}
    </div>
  );
};

export default PlantList;
