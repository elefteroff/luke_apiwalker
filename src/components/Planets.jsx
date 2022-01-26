import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = (props) => {
    const { id } = useParams();


    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data)
                // setloading(true)
            })
            .catch(error => console.log(error))
    }, [id]);

    return (
        <div>
            <p>Name: {planet.name}</p>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Gravity : {planet.gravity}</p>
            <p>Orbital Period : {planet.orbital_period}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planets;