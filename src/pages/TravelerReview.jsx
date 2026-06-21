import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTravelerReview } from '../data/travelerReviews.js';

function TravelerReview() {
  const { id } = useParams();
  const [traveler, setTraveler] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const review = getTravelerReview(id);

  useEffect(() => {
    async function fetchTraveler() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
          throw new Error('Unable to load this traveler review right now.');
        }

        const data = await response.json();

        if (!data.id) {
          throw new Error('Traveler not found.');
        }

        setTraveler(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTraveler();
  }, [id]);

  const stars = Array.from({ length: 5 }, (_, index) => index < review.rating);

  return (
    <section className="review-page">
      <Link className="back-link" to="/travelers">
        Back to travelers
      </Link>

      {isLoading && <p className="status-message">Loading traveler review...</p>}
      {error && <p className="status-message error">{error}</p>}

      {!isLoading && !error && traveler && (
        <article className="review-panel">
          <div className="review-image-wrap">
            <img
              src={review.imageUrl}
              alt={review.imageAlt}
            />
          </div>

          <div className="review-content">
            <p className="eyebrow">Traveler Review</p>
            <h1>{traveler.name}</h1>
            <p className="tour-name">{review.tour}</p>

            <div className="rating" aria-label={`${review.rating} out of 5 stars`}>
              {stars.map((isFilled, index) => (
                <span className={isFilled ? 'star filled' : 'star'} key={index}>
                  &#9733;
                </span>
              ))}
              <span className="rating-text">{review.rating}/5</span>
            </div>

            <blockquote>{review.review}</blockquote>

            <div className="traveler-details">
              <p>
                <span>Username</span>
                {traveler.username}
              </p>
              <p>
                <span>Email</span>
                {traveler.email}
              </p>
              <p>
                <span>City</span>
                {traveler.address.city}
              </p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default TravelerReview;
