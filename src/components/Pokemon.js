import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ReviewFeed from './ReviewFeed';
import NewReview from './NewReview';

function Pokemon() {

    const [pokemon, setPokemon] = useState("")

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/pokemon/${id}`)
            .then((r) => r.json())
            .then(setPokemon);
    }, []);

    const [reviews, setReviews] = useState([])

    const getProfile = async () => {
        const response = await fetch(`http://localhost:9292/pokemon/${id}/reviews`);
        const data = await response.json();
        setReviews(data.reviews);
      };

    useEffect(() => {
        getProfile();
    }, []);

  return (
    <div>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.location}</p>
        <p>{pokemon.move}</p>
        <p>{pokemon.id}</p>
        <div>
            <NewReview pokemon_id={pokemon.id} />
        </div>
        <div>
            <ReviewFeed reviews={reviews} />
        </div>
    </div>
  )
}

export default Pokemon;