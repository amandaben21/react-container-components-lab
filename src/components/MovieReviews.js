import React from 'react';

const MovieReview = (props) => {
    return (
        <div className="review-list">
            { props.reviews.map(review => <p className="review">review</p>) }
        </div>
    )
}

export default MovieReview;