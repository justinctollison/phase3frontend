import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ReviewFeed from './ReviewFeed';

function Pokemon() {

    const [pokemon, setPokemon] = useState("")

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/pokemon/${id}`)
            .then((r) => r.json())
            .then(setPokemon);
    }, []);

  return (
    <div>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.location}</p>
        <p>{pokemon.move}</p>
        <div>
            <ReviewFeed />
        </div>
    </div>
  )
}

export default Pokemon;