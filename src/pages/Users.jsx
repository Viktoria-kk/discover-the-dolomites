import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Unable to load travelers right now.');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <section className="users-page">
      <div className="page-heading">
        <p className="eyebrow">Guest Stories</p>
        <h1>Our Travelers</h1>
      </div>

      {isLoading && <p className="status-message">Loading travelers...</p>}
      {error && <p className="status-message error">{error}</p>}

      {!isLoading && !error && (
        <div className="user-grid">
          {users.map((user) => (
            <Link className="user-card" to={`/travelers/${user.id}`} key={user.id}>
              <h2>{user.name}</h2>
              <p>
                <span>Username</span>
                {user.username}
              </p>
              <p>
                <span>Email</span>
                {user.email}
              </p>
              <p>
                <span>City</span>
                {user.address.city}
              </p>
              <span className="review-button">
                Read Review
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default Users;
