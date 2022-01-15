import { useState, useEffect } from 'react';
import PlanetsList from "../components/PlanetsList";

const PlanetsContainer = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  });

  const getPlanets = () => {
    fetch("http://127.0.0.1:5000/api/planets")
      .then(results => results.json())
      .then(data => setPlanets(data));
  };

  const onPlanetClick = (planetName) => {
    const names = selectedPlanets.includes(planetName);
    if (names == false) {
      setSelectedPlanets([...selectedPlanets, planetName]);
      console.log(planetName);
      console.log(selectedPlanets);
    };


  };

  return (
    <>
      <PlanetsList planets={planets} onPlanetClick={onPlanetClick} selectedPlanets={selectedPlanets} />
      {/* {selectedPlanets && <PlanetDetails planets={selectedPlanets} />} */}
    </>
  );
};



export default PlanetsContainer;