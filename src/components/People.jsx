import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const People = (props) => {
    const { id } = useParams();


    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data)
                setPeople(response.data)
                // setloading(true)
            })
            .catch(error => console.log(error))
        }, [id]);

        return (
            <div>
                <p>Name: {people.name}</p>
                <p>Gender: {people.gender}</p>
                <p>Birth Year: {people.birth_year}</p>
                <p>Height (cm): {people.height}</p>
                <p>Weight (kg): {people.mass}</p>
            </div>

        )
}

export default People;