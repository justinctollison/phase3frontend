import React from 'react'
import { Link } from 'react-router-dom';

function MainFeed( {pokemons} ) {
  return(
    <div>
      <div>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <div>
            <article>
              <p>{pokemon.name}</p>
              <p>{pokemon.location}</p>
              <p>{pokemon.move}</p>
            </article>
            <Link className='btn' to={`/pokemon/${pokemon.id}`}>View</Link>
          </div>
        ))
      ) : (
        <>
        <p>Nothing here</p>
        </>
      )}
      </div>
    </div>
  );
}

export default MainFeed;