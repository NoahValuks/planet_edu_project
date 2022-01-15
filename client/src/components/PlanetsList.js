import PlanetItem from "./PlanetItem";
import PlanetDetails from "./PlanetDetails";
import './PlanetsList.css';

const PlanetList = ({planets, onPlanetClick, selectedPlanets}) => {
    // const planetsList = planets.map((planet) =>{
    //     return <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
    // });

    return(
        <div className="pizza-planet">
            {
                planets.map((planet, index) => (
                    <div className={`list-container-${index}`} key={`Container${index}`}>
                        {
                            index % 2 === 0
                            ?
                            <>
                                <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
                                {selectedPlanets.includes(planet.name) && <PlanetDetails planet={planet} key={`${index} Card`} />}
                            </>
                            :
                            <>
                                {selectedPlanets.includes(planet.name) && <PlanetDetails planet={planet} key={`${index} Card`} />}
                                <PlanetItem planet={planet} key={planet._id} onPlanetClick={onPlanetClick} />
                            </>
                        }
                    </div>   
                ))
            }
        </div>
        );
}

export default PlanetList;