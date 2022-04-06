import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function ReviewFeed() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [reviews, setReviews] = useState([])



    const getProfile = async () => {
        const response = await fetch(`http://localhost:9292/pokemon/${id}/reviews`);
        const data = await response.json();
        setReviews(data.reviews);
      };

    useEffect(() => {
        getProfile();
    }, []);

    
    console.log(reviews)

    function handleDelete(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/pokemon/${id}/reviews`, {
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
        </div>)}
    </div>
  )
}

export default ReviewFeed