import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import DeleteReview from './DeleteReview';

function ReviewFeed( {reviews} ) {

    const navigate = useNavigate()
    const { id } = useParams()

    // const [reviews, setReviews] = useState([])



    // const getProfile = async () => {
    //     const response = await fetch(`http://localhost:9292/pokemon/${id}/reviews`);
    //     const data = await response.json();
    //     setReviews(data.reviews);
    //   };

    // useEffect(() => {
    //     getProfile();
    // }, []);

    
    console.log(reviews)

    function handleDelete(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/reviews/${reviews.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((r) => {
          if(r.ok) {
              navigate(`/pokemon/${id}/reviews`);
          } else {
              r.json()
          }
      });
    }

  return (
    <div>
        {reviews.map((review) => 
        <div>
            <h2>Anonnymous:</h2>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            <DeleteReview reviews_id={review.id}/>
        </div>)}
    </div>
  )
}

export default ReviewFeed